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

interface Tweet {
  id: string
  content: string
  user: string
  userName: string
  usersLiked: string[]
  date: number
  imgUrl?: string
}

type UserDataToSignUp = {
  user: User
  password: string
}

type ToggleShowProps = {
  toggle?: () => void
  show: boolean
  showModal?: () => void
}

export { Gender }
export type { ToggleShowProps, Tweet, User, UserDataToSignUp }
