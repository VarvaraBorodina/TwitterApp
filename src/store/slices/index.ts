import { combineReducers } from 'redux'

import { themeReducer } from './themeSlice'
import { tweetsReducer } from './tweetsSlice'
import { userReducer } from './userSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
  theme: themeReducer,
})
