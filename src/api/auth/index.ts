// eslint-disable-next-line simple-import-sort/imports
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
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
import { User, UserDataToSignUp } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

const signUp = createAsyncThunk(
  'user/signUp',
  async ({ user, password }: UserDataToSignUp) => {
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
      throw new Error('Invalid phone number')
    }
    const { email } = querySnapshot.docs[0].data() as User

    return dispatch(logInWithEmail({ email, password }))
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
    throw new Error('Error with google account')
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

export { logInWithEmail, logInWithGoogle, logInWithPhoneNumber, signUp }
