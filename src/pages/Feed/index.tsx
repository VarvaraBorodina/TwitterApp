import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllTweets } from '@/api/tweets'
import { searchUsers } from '@/api/user'
import Layout from '@/components/Layout'
import ToggleTheme from '@/components/ThemeToggle'
import Tweets from '@/components/Tweets'
import UserPreview from '@/components/UserPreview'
import { ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { resetError } from '@/store/slices/tweetsSlice'
import { User } from '@/types'

import { Header, Title, TweetError } from './styled'

const { HOME } = ROUTES_NAMES
const { SEARCH_USER, HOME_PAGE_HEADER } = TEXT

const Feed: React.FC = () => {
  const navigate = useNavigate()

  const user = useTypedSelector(({ user }) => user.user) as User
  const tweets = useTypedSelector(({ tweets }) => tweets.tweets)
  const error = useTypedSelector(({ tweets }) => tweets.error)

  const dispath = useTypedDispatch()

  useEffect(() => {
    dispath(getAllTweets())
    if (!user) {
      navigate(HOME)
    }
    dispath(resetError())
  }, [])

  return (
    <Layout
      getSearchData={searchUsers}
      renderSearchItem={UserPreview}
      searchPlaceholder={SEARCH_USER}
    >
      <>
        <Header>
          <Title>{HOME_PAGE_HEADER}</Title>
          <ToggleTheme />
        </Header>
        <TweetError>{error}</TweetError>
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}

export default Feed
