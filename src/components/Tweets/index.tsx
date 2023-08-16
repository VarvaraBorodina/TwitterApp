import TweetContainer from '@/components/TweetContainer'

import TweetForm from '../TweetForm'
import { TweetsType } from './types'

const Tweets = ({ tweets, onTweetsChange }: TweetsType) => {
  return (
    <div>
      <TweetForm handleTweet={onTweetsChange} />
      {tweets.map((tweet) => (
        <TweetContainer
          key={tweet.id}
          tweet={tweet}
          onTweetsChange={onTweetsChange}
        />
      ))}
    </div>
  )
}

export default Tweets
