import { Theme } from '@/constants/theme'
import { Tweet, User } from '@/types'

export type ThemeSliceType = {
  theme: Theme
}

export type UserSliceType = {
  user: User | null
  loading: boolean
  error: string
}

export type TweetsSliceType = {
  tweets: Tweet[]
  loading: boolean
  error: string
}
