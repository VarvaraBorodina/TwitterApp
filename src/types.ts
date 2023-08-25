export enum Gender {
  Man = 'Man',
  Woman = 'Woman',
}

export interface User {
  id: string
  email: string
  name: string
  lastName: string
  telegram?: string
  gender?: Gender
  phone: string
  dateOfBirth?: string
}

export interface Tweet {
  id: string
  content: string
  user: string
  userName: string
  usersLiked: string[]
  date: number
  imgUrl?: string
}

export type UserDataToSignUp = {
  user: User
  password: string
}

export type ToggleShowProps = {
  toggle?: () => void
  show: boolean
  showModal?: () => void
}

export type Searchable = User | Tweet
