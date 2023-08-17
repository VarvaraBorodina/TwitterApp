import { Gender } from '@/types'

type signUpFormType = {
  name: string
  lastName: string
  email: string
  phone: string
  password: string
  gender: Gender
  day: string
  month: number
  year: string
}

export type { signUpFormType }
