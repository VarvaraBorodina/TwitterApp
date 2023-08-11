enum Gender {
  Man,
  Woman,
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

export { Gender }
export type { User, UserDataToSignUp }
