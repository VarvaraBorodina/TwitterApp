import { createSlice } from '@reduxjs/toolkit'

import { getThemeFromSessionStorage, saveThemeToSessionStorage } from '@/utils'

import { ThemeSliceType } from './types'

const initialState: ThemeSliceType = {
  theme: getThemeFromSessionStorage(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
      saveThemeToSessionStorage(state.theme)
    },
    resetTheme(state) {
      state.theme = 'LIGHT'
      saveThemeToSessionStorage(state.theme)
    },
  },
})

export default themeSlice.reducer
export const { toggleTheme, resetTheme } = themeSlice.actions
