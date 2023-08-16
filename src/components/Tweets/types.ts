import { Tweet } from '@/types'

type TweetsType = {
  tweets: Tweet[]
  onTweetAdd: () => void
}

export type { TweetsType }
