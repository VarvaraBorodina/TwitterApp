import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllTweets, searchTweet } from '@/api/tweets'
import Layout from '@/components/Layout'
import TweetPreview from '@/components/TweetPreview'
import Tweets from '@/components/Tweets'
import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { User } from '@/types'

import { Header, Title, TweetError } from './styled'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  const user = useTypedSelector(({ user }) => user.user) as User
  const tweets = useTypedSelector(({ tweets }) => tweets.tweets)
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
        <Header>
          <Title>Home</Title>
          <div>theme</div>
        </Header>
        <TweetError>{error}</TweetError>
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}

export default Profile
