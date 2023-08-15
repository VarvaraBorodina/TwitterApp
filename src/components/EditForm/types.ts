import { Gender } from '@/types'

type editFormType = {
  name: string
  lastName: string
  gender: Gender | undefined
  day: string | undefined
  month: number | undefined
  year: string | undefined
  telegram: string | undefined
}

type editFormProps = {
  showModal: (show: boolean) => void
}

export type { editFormProps, editFormType }
