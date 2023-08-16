import { deleteTweet, toggleLike } from '@/api/tweets'
import TweetContainer from '@/components/TweetContainer'

import TweetForm from '../TweetForm'
import { TweetsType } from './types'

const Tweets = ({ tweets, onTweetsChange }: TweetsType) => {
  const handleDelete = (tweetId: string, url: string | undefined) => () => {
    deleteTweet(tweetId, url).then(() => {
      if (onTweetsChange) {
        onTweetsChange()
      }
    })
  }

  const handleToggleLike = (tweetId: string) => () => {
    toggleLike(tweetId).then(() => {
      if (onTweetsChange) {
        onTweetsChange()
      }
    })
  }

  return (
    <div>
      <TweetForm handleTweet={onTweetsChange} />
      {tweets.map((tweet) => (
        <TweetContainer
          key={tweet.id}
          tweet={tweet}
          onDelete={handleDelete(tweet.id, tweet.imgUrl)}
          onLike={handleToggleLike(tweet.id)}
        />
      ))}
    </div>
  )
}

export default Tweets
