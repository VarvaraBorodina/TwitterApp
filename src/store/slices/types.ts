import { Tweet, User } from '@/types'

type UserSliceType = {
  user: User | null
  loading: boolean
  error: string
}

type TweetsSliceType = {
  tweets: Tweet[]
  loading: boolean
  error: string
}

export type { TweetsSliceType, UserSliceType }
