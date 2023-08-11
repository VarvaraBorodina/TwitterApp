import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/types'

import { UserSliceType } from './types'

const initialState: UserSliceType = {
  user: null,
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: () => {
      return {
        user: null,
        loading: false,
        error: '',
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          return {
            ...state,
            loading: true,
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action: PayloadAction<User>) => {
          return {
            loading: false,
            user: action.payload,
            error: '',
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          return {
            loading: false,
            user: null,
            error: action.error.message ?? '',
          }
        }
      )
  },
})

export default userSlice.reducer
export const { logOut } = userSlice.actions
