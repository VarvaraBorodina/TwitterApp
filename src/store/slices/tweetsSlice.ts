import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addTweet, deleteTweet, getAllTweets, toggleLike } from '@/api/tweets'
import { Tweet } from '@/types'

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
      .addCase(
        getAllTweets.fulfilled,
        (state, { payload }: PayloadAction<Tweet[]>) => {
          return {
            error: '',
            loading: false,
            tweets: payload,
          }
        }
      )
      .addCase(
        addTweet.fulfilled,
        (state, { payload }: PayloadAction<Tweet>) => {
          return {
            error: '',
            loading: false,
            tweets: [payload, ...state.tweets],
          }
        }
      )
      .addCase(
        deleteTweet.fulfilled,
        ({ tweets }, { payload }: PayloadAction<string>) => {
          return {
            error: '',
            loading: false,
            tweets: tweets.filter(({ id }) => id !== payload),
          }
        }
      )
      .addCase(
        toggleLike.fulfilled,
        ({ tweets }, { payload }: PayloadAction<Tweet>) => {
          const tweetIndex = tweets.findIndex(({ id }) => id === payload.id)

          const updatedTweets = [...tweets]
          updatedTweets[tweetIndex] = payload

          return {
            error: '',
            loading: false,
            tweets: updatedTweets,
          }
        }
      )

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
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          return {
            loading: false,
            tweets: [],
            error: action.error.message,
          }
        }
      )
  },
})

export const tweetsAmountSelector = createSelector(
  [(state) => state.tweets],
  (tweets) => tweets.tweets.length
)

export const userTweetsSelector = (id: string) =>
  createSelector([(state) => state.tweets], ({ tweets }) =>
    tweets.filter((tweet: Tweet) => tweet.user === id)
  )

export default userSlice.reducer
export const { resetError } = userSlice.actions
