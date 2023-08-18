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
import { User, UserDataToSignUp } from '@/types'
import { clearSessionStorage } from '@/utils/sessionStorage'

const signUp = createAsyncThunk(
  'user/signUp',
  async ({ user, password }: UserDataToSignUp) => {
    const usersRef = collection(db, 'users')
    const userResponse = query(usersRef, where('phone', '==', user.phone))
    const querySnapshot = await getDocs(userResponse)
    if (querySnapshot.docs[0]) {
      throw new Error(TEXT.PHONE_EXIST_ERROR)
    }
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      password
    )

    user.id = response.user.uid
    await setDoc(doc(db, 'users', response.user.uid), user)
    return user
  }
)

const logInWithEmail = createAsyncThunk(
  'user/logInWithEmail',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await signInWithEmailAndPassword(auth, email, password)

    const docRef = doc(db, 'users', response.user.uid)

    const docSnap = await getDoc(docRef)
    const user: User = docSnap.data() as User

    return user
  }
)

const logInWithPhoneNumber = createAsyncThunk(
  'user/logInWithPhoneNumber',
  async (
    { phone, password }: { phone: string; password: string },
    { dispatch }
  ) => {
    const usersRef = collection(db, 'users')

    const response = query(usersRef, where('phone', '==', phone))
    const querySnapshot = await getDocs(response)
    if (!querySnapshot.docs[0]) {
      throw new Error(TEXT.LOGIN_ERROR)
    }
    const { email } = querySnapshot.docs[0].data() as User

    return (await dispatch(logInWithEmail({ email, password }))).payload
  }
)

const logInWithGoogle = createAsyncThunk('user/logInWithGoogle', async () => {
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
    throw new Error(TEXT.GOOGLE_ERROR)
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
})

const logOut = createAsyncThunk('user/logOut', async () => {
  clearSessionStorage()
  await signOut(auth)
  return null
})

export { logInWithEmail, logInWithGoogle, logInWithPhoneNumber, logOut, signUp }
