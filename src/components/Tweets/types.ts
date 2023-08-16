import { Tweet } from '@/types'

type TweetsType = {
  tweets: Tweet[]
  onTweetsChange: () => void
}

export type { TweetsType }
