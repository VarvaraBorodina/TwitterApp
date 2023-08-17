import { Tweet } from '@/types'

type TweetContainerType = {
  tweet: Tweet
  afterDelete?: () => void
}

export type { TweetContainerType }
