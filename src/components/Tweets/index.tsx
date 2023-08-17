import React from 'react'
import { useSelector } from 'react-redux'

import TweetForm from '@/components/forms/TweetForm'
import TweetContainer from '@/components/TweetContainer'
import { TEXT } from '@/constants'
import { Tweet } from '@/types'

import { Message } from './styled'

const Tweets = ({ tweets }: { tweets: Tweet[] }) => {
  const loading = useSelector(({ tweets }) => tweets.loading)

  return (
    <div>
      <TweetForm />
      {!tweets.length && !loading ? (
        <Message>{TEXT.NO_TWEET}</Message>
      ) : (
        tweets.map((tweet) => <TweetContainer key={tweet.id} tweet={tweet} />)
      )}
    </div>
  )
}

export default React.memo(Tweets)
