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

interface Post {
  id: string
  content: string
  user: string
  usersLiked: string[]
  date: string
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
export type { Post, ToggleShowProps, User, UserDataToSignUp }
