import { Tweet } from '@/types'

export type TweetContainerType = {
  tweet: Tweet
  afterDelete?: () => void
}
