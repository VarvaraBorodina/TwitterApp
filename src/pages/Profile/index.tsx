import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllTweets, searchTweet } from '@/api/tweets'
import { Layout } from '@/components/Layout'
import { TweetPreview } from '@/components/TweetPreview'
import { Tweets } from '@/components/Tweets'
import { UserInfo } from '@/components/UserInfo'
import { ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { userTweetsSelector } from '@/store/slices/tweetsSlice'
import { User } from '@/types'

import { TweetError } from './styled'

const { HOME } = ROUTES_NAMES
const { SEARCH_TWEET } = TEXT

export const Profile = () => {
  const user = useTypedSelector(({ user }) => user.user) as User
  const navigate = useNavigate()
  const tweets = useTypedSelector(userTweetsSelector(user?.id))
  const error = useTypedSelector(({ tweets }) => tweets.error)
  const dispath = useTypedDispatch()

  useEffect(() => {
    if (!user) {
      navigate(HOME)
    }
    dispath(getAllTweets())
  }, [])

  return (
    <Layout
      getSearchData={searchTweet}
      renderSearchItem={TweetPreview}
      searchPlaceholder={SEARCH_TWEET}
    >
      <>
        {error && <TweetError>{error}</TweetError>}
        <UserInfo />
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}
