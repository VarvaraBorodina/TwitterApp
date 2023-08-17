import { Theme } from '@/constants/theme'
import { Tweet, User } from '@/types'

type ThemeSliceType = {
  theme: Theme
}

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

export type { ThemeSliceType, TweetsSliceType, UserSliceType }
