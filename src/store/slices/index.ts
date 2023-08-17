import { combineReducers } from 'redux'

import themeSlice from './themeSlice'
import tweetsSlice from './tweetsSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  user: userSlice,
  tweets: tweetsSlice,
  theme: themeSlice,
})

export default rootReducer
