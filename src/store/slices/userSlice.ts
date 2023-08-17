import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ERRORS } from '@/constants'
import { User } from '@/types'
import { getUserFromLocalStorage, saveUserToLocalStorage } from '@/utils'

import { UserSliceType } from './types'

const initialState: UserSliceType = {
  user: getUserFromLocalStorage(),
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetError: (state) => {
      return {
        ...state,
        error: '',
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          action.type.endsWith('/pending') && action.type.startsWith('user'),
        (state) => {
          return {
            ...state,
            loading: true,
          }
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith('/fulfilled') && action.type.startsWith('user'),
        (state, action: PayloadAction<User>) => {
          saveUserToLocalStorage(action.payload)
          return {
            loading: false,
            user: action.payload,
            error: '',
          }
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith('/rejected') && action.type.startsWith('user'),
        (state, action) => {
          return {
            loading: false,
            user: null,
            error: ERRORS[action.error.message] ?? action.error.message,
          }
        }
      )
  },
})

export default userSlice.reducer
export const { resetError } = userSlice.actions
