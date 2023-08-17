import { Theme } from '@/constants/theme'
import { User } from '@/types'

const getUserFromLocalStorage = () => {
  const userString = localStorage.getItem('user')
  if (userString) {
    const user: User = JSON.parse(userString)
    return user
  }
  return null
}

const getThemeFromLocalStorage = (): Theme => {
  const themeString = localStorage.getItem('theme')
  if (themeString) {
    const theme: Theme = JSON.parse(themeString)
    return theme
  }
  return 'LIGHT'
}

const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const saveThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem('theme', JSON.stringify(theme))
}

const clearLocalStorage = () => {
  localStorage.clear()
}

export {
  clearLocalStorage,
  getThemeFromLocalStorage,
  getUserFromLocalStorage,
  saveThemeToLocalStorage,
  saveUserToLocalStorage,
}
