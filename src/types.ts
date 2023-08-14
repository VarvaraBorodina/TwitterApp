enum Gender {
  Man = 'Man',
  Woman = 'Woman',
}

interface User {
  id: string
  email: string
  name: string
  lastName: string
  telegram?: string
  gender?: Gender
  phone: string
  dateOfBirth?: string
}

type UserDataToSignUp = {
  user: User
  password: string
}

type ToggleShowProps = {
  toggle?: () => void
  show: boolean
}

export { Gender }
export type { ToggleShowProps, User, UserDataToSignUp }
