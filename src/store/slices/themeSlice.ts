import { createSlice } from '@reduxjs/toolkit'

import { ThemeSliceType } from './types'

const initialState: ThemeSliceType = { theme: 'LIGHT' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    },
  },
})

export default themeSlice.reducer
export const { toggleTheme } = themeSlice.actions
