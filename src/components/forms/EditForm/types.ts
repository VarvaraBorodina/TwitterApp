import { Gender } from '@/types'

export type editFormType = {
  name: string
  lastName: string
  gender: Gender | undefined
  day: string | undefined
  month: string | undefined
  year: string | undefined
  telegram: string | undefined
  password: string | undefined
}

export type editFormProps = {
  showModal: (show: boolean) => void
}
