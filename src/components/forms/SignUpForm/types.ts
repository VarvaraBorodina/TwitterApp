import { Gender } from '@/types'

export type signUpFormType = {
  name: string
  lastName: string
  email: string
  phone: string
  password: string
  gender: Gender
  day: string
  month: string
  year: string
}
