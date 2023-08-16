import TweetContainer from '@/components/TweetContainer'
import { Tweet } from '@/types'

import TweetForm from '../TweetForm'

const Tweets = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <div>
      <TweetForm />
      {tweets.map((tweet) => (
        <TweetContainer key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

export default Tweets
