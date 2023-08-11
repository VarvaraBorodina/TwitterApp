import { User } from '@/types'

type UserSliceType = {
  user: User | null
  loading: boolean
  error: string
}

export type { UserSliceType }
