import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllTweets, searchTweet } from '@/api/tweets'
import Layout from '@/components/Layout'
import TweetPreview from '@/components/TweetPreview'
import Tweets from '@/components/Tweets'
import UserInfo from '@/components/UserInfo'
import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { User } from '@/types'

import { TweetError } from './styled'

const Profile: React.FC = () => {
  const user = useTypedSelector(({ user }) => user.user) as User
  const navigate = useNavigate()
  const tweets = useTypedSelector(({ tweets }) =>
    tweets.tweets.filter((tweet) => tweet.user === user?.id)
  )
  const error = useTypedSelector(({ tweets }) => tweets.error)
  const dispath = useTypedDispatch()

  useEffect(() => {
    dispath(getAllTweets())
    if (!user) {
      navigate(ROUTES_NAMES.HOME)
    }
  }, [])

  return (
    <Layout getSearchData={searchTweet} renderSearchItem={TweetPreview}>
      <>
        {error && <TweetError>{error}</TweetError>}
        <UserInfo />
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}

export default Profile
