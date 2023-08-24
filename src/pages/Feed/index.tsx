import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllTweets } from '@/api/tweets'
import { searchUsers } from '@/api/user'
import { Layout } from '@/components/Layout'
import { Tweets } from '@/components/Tweets'
import { UserPreview } from '@/components/UserPreview'
import { ROUTES_NAMES, TEXT } from '@/constants'
import { Theme } from '@/constants/theme'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { themeSelector, toggleTheme } from '@/store/slices/themeSlice'
import { resetError } from '@/store/slices/tweetsSlice'
import { User } from '@/types'

import { Ellipse, Header, Title, TweetError } from './styled'

const { HOME } = ROUTES_NAMES
const { SEARCH_USER, HOME_PAGE_HEADER } = TEXT

export const Feed = () => {
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

  const dispatch = useTypedDispatch()
  const theme: Theme = useTypedSelector(themeSelector)

  return (
    <Layout
      getSearchData={searchUsers}
      renderSearchItem={UserPreview}
      searchPlaceholder={SEARCH_USER}
    >
      <>
        <Header>
          <Title>{HOME_PAGE_HEADER}</Title>
          <Ellipse
            onClick={() => dispatch(toggleTheme())}
            $isLeft={theme === 'LIGHT'}
            data-cy="toggle"
            data-testid="toggle"
          />
        </Header>
        <TweetError>{error}</TweetError>
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}
