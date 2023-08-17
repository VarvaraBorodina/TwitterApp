import TweetContainer from '@/components/TweetContainer'
import { Tweet } from '@/types'

import TweetForm from '../TweetForm'
import { Message } from './styled'

const Tweets = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <div>
      <TweetForm />
      {tweets.length ? (
        tweets.map((tweet) => <TweetContainer key={tweet.id} tweet={tweet} />)
      ) : (
        <Message>{`No tweet yet :(`}</Message>
      )}
    </div>
  )
}

export default Tweets
