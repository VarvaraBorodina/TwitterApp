import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { auth, db } from '@/api'
import { TEXT } from '@/constants'
import { THUNK_NAMES } from '@/constants'
import { User, UserDataToSignUp } from '@/types'
import { clearSessionStorage } from '@/utils/sessionStorage'

const { PHONE_EXIST_ERROR, LOGIN_ERROR, GOOGLE_ERROR } = TEXT
const {
  AUTH: {
    USER_SIGN_UP,
    USER_LOGIN_WITH_EMAIL,
    USER_LOGIN_WITH_PHONE_NUMBER,
    USER_LOGIN_WITH_GOOGLE,
    USER_LOGOUT,
  },
} = THUNK_NAMES

export const signUp = createAsyncThunk(
  USER_SIGN_UP,
  async ({ user, password }: UserDataToSignUp) => {
    const usersRef = collection(db, 'users')
    const userResponse = query(usersRef, where('phone', '==', user.phone))
    const querySnapshot = await getDocs(userResponse)
    if (querySnapshot.docs[0]) {
      throw new Error(PHONE_EXIST_ERROR)
    }
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      password
    )

    const createdUser = {
      ...user,
      id: response.user.uid,
    }
    await setDoc(doc(db, 'users', createdUser.id), createdUser)
    return user
  }
)

export const logInWithEmail = createAsyncThunk(
  USER_LOGIN_WITH_EMAIL,
  async ({ email, password }: { email: string; password: string }) => {
    const response = await signInWithEmailAndPassword(auth, email, password)

    const docRef = doc(db, 'users', response.user.uid)

    const docSnap = await getDoc(docRef)
    const user: User = docSnap.data() as User

    return user
  }
)

export const logInWithPhoneNumber = createAsyncThunk(
  USER_LOGIN_WITH_PHONE_NUMBER,
  async (
    { phone, password }: { phone: string; password: string },
    { dispatch }
  ) => {
    const usersRef = collection(db, 'users')

    const response = query(usersRef, where('phone', '==', phone))
    const querySnapshot = await getDocs(response)
    if (!querySnapshot.docs[0]) {
      throw new Error(LOGIN_ERROR)
    }
    const { email } = querySnapshot.docs[0].data() as User

    return (await dispatch(logInWithEmail({ email, password }))).payload
  }
)

export const logInWithGoogle = createAsyncThunk(
  USER_LOGIN_WITH_GOOGLE,
  async () => {
    const provider = await new GoogleAuthProvider()
    const { user: googleAccount } = await signInWithPopup(auth, provider)
    const { uid, email, displayName, phoneNumber } = googleAccount

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)
    const userFromStorage = docSnap.data() as User
    if (userFromStorage) {
      return userFromStorage
    }

    if (!displayName || !email) {
      throw new Error(GOOGLE_ERROR)
    }

    const user: User = {
      id: uid,
      email: email,
      name: displayName.split(' ')[0],
      lastName: displayName.split(' ')[1],
      phone: phoneNumber ?? '',
    }

    await setDoc(doc(db, 'users', uid), user)
    return user
  }
)

export const logOut = createAsyncThunk(USER_LOGOUT, async () => {
  clearSessionStorage()
  await signOut(auth)
  return null
})
