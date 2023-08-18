import { Theme } from '@/constants/theme'
import { User } from '@/types'

const getUserFromSessionStorage = () => {
  const userString = sessionStorage.getItem('user')
  if (userString) {
    const user: User = JSON.parse(userString)
    return user
  }
  return null
}

const getThemeFromSessionStorage = (): Theme => {
  const themeString = sessionStorage.getItem('theme')
  if (themeString) {
    const theme: Theme = JSON.parse(themeString)
    return theme
  }
  return 'LIGHT'
}

const saveUserToSessionStorage = (user: User) => {
  sessionStorage.setItem('user', JSON.stringify(user))
}

const saveThemeToSessionStorage = (theme: Theme) => {
  sessionStorage.setItem('theme', JSON.stringify(theme))
}

const clearSessionStorage = () => {
  sessionStorage.clear()
}

export {
  clearSessionStorage,
  getThemeFromSessionStorage,
  getUserFromSessionStorage,
  saveThemeToSessionStorage,
  saveUserToSessionStorage,
}
