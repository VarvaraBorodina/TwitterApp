import { Theme } from '@/constants/theme'
import { User } from '@/types'

export const getUserFromSessionStorage = () => {
  const userString = sessionStorage.getItem('user')
  if (userString) {
    const user: User = JSON.parse(userString)
    return user
  }
  return null
}

export const getThemeFromSessionStorage = (): Theme => {
  const themeString = sessionStorage.getItem('theme')
  if (themeString) {
    const theme: Theme = JSON.parse(themeString)
    return theme
  }
  return 'LIGHT'
}

export const saveUserToSessionStorage = (user: User) => {
  sessionStorage.setItem('user', JSON.stringify(user))
}

export const saveThemeToSessionStorage = (theme: Theme) => {
  sessionStorage.setItem('theme', JSON.stringify(theme))
}

export const clearSessionStorage = () => {
  sessionStorage.clear()
}
