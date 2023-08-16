import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ERRORS } from '@/constants'
import { User } from '@/types'

import { TweetsSliceType } from './types'

const initialState: TweetsSliceType = {
  tweets: [],
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'tweets',
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
            error: ERRORS[action.error.message] ?? action.error.message,
          }
        }
      )
  },
})

export default userSlice.reducer
export const { resetError } = userSlice.actions
