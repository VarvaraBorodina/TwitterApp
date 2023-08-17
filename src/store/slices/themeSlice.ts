import { createSlice } from '@reduxjs/toolkit'

import { getThemeFromLocalStorage, saveThemeToLocalStorage } from '@/utils'

import { ThemeSliceType } from './types'

const initialState: ThemeSliceType = {
  theme: getThemeFromLocalStorage(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
      saveThemeToLocalStorage(state.theme)
    },
    resetTheme(state) {
      state.theme = 'LIGHT'
      saveThemeToLocalStorage(state.theme)
    },
  },
})

export default themeSlice.reducer
export const { toggleTheme, resetTheme } = themeSlice.actions
