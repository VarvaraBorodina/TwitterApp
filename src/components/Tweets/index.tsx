import TweetContainer from '@/components/TweetContainer'

import TweetForm from '../TweetForm'
import { TweetsType } from './types'

const Tweets = ({ tweets, onTweetAdd }: TweetsType) => {
  return (
    <div>
      <TweetForm handleTweet={onTweetAdd} />
      {tweets.map((tweet) => (
        <TweetContainer key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

export default Tweets
