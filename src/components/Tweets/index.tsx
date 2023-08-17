import React from 'react'
import { useSelector } from 'react-redux'

import TweetForm from '@/components/forms/TweetForm'
import TweetContainer from '@/components/TweetContainer'
import { Tweet } from '@/types'

import { Message } from './styled'

const Tweets = ({ tweets }: { tweets: Tweet[] }) => {
  const loading = useSelector(({ tweets }) => tweets.loading)

  return (
    <div>
      <TweetForm />
      {!tweets.length && !loading ? (
        <Message>{`No tweet yet :(`}</Message>
      ) : (
        tweets.map((tweet) => <TweetContainer key={tweet.id} tweet={tweet} />)
      )}
    </div>
  )
}

export default React.memo(Tweets)
