import { createAsyncThunk } from '@reduxjs/toolkit'
import { updatePassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

import { auth, db } from '@/api'
import { User } from '@/types'

const changeUser = createAsyncThunk('user/change', async (newUser: User) => {
  await setDoc(doc(db, 'users', newUser.id), newUser)
  return newUser
})

const changePassword = async (password: string) => {
  const user = auth.currentUser
  if (user) {
    await updatePassword(user, password)
  }
}

export { changePassword, changeUser }
