import { createAsyncThunk } from '@reduxjs/toolkit'
import { updatePassword } from 'firebase/auth'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { auth, db } from '@/api'
import { THUNK_NAMES } from '@/constants'
import { User } from '@/types'

const {
  USER: { CHANGE_USER },
} = THUNK_NAMES

export const changeUser = createAsyncThunk(
  CHANGE_USER,
  async (newUser: User) => {
    await setDoc(doc(db, 'users', newUser.id), newUser)
    return newUser
  }
)

export const changePassword = async (password: string) => {
  const user = auth.currentUser
  if (user) {
    await updatePassword(user, password)
  }
}

export const searchUsers = async (search: string) => {
  const end = search.replace(/.$/, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 1)
  )

  const usersQuery = query(
    collection(db, 'users'),
    where('name', '>=', search),
    where('name', '<', end)
  )

  const querySnapshot = await getDocs(usersQuery)
  const users: User[] = []
  querySnapshot.forEach((doc) => {
    users.push(doc.data() as User)
  })

  return users
}
