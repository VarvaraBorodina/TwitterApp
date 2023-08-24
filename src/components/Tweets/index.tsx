import { memo } from 'react'

import { TweetForm } from '@/components/forms/TweetForm'
import { TweetContainer } from '@/components/TweetContainer'
import { TEXT } from '@/constants'
import { useTypedSelector } from '@/hooks'
import { Tweet } from '@/types'

import { Message } from './styled'

const { NO_TWEET } = TEXT

export const Tweets = memo(({ tweets }: { tweets: Tweet[] }) => {
  const loading = useTypedSelector(({ tweets }) => tweets.loading)

  return (
    <>
      <TweetForm />
      {!tweets.length && !loading ? (
        <Message>{NO_TWEET}</Message>
      ) : (
        tweets.map((tweet) => <TweetContainer key={tweet.id} tweet={tweet} />)
      )}
    </>
  )
})
