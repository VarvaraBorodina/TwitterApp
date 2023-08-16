import { combineReducers } from 'redux'

import tweetsSlice from './tweetsSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  user: userSlice,
  tweets: tweetsSlice,
})

export default rootReducer
