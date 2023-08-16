import { Tweet } from '@/types'

type TweetContainerType = {
  tweet: Tweet
  onDelete: () => void
  onLike: () => void
  /* onDelete: (tweetId: string, url: string | undefined) => void
  onLike: (tweetId: string) => void*/
}

export type { TweetContainerType }
