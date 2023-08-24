import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockWrapper } from '@/components/MockWrapper'
import * as hooks from '@/hooks'
import { Tweet } from '@/types'

import { TweetContainer } from '.'

const mockDispatch = jest.fn()

jest.mock('@/hooks')

const user = {
  loading: false,
  error: false,
  user: {
    name: 'name',
    lastName: 'lastName',
    email: 'qwer@rt.we',
    phone: '+2234567822',
    gender: 'Woman',
    dateOfBirth: new Date(2003, 1, 12).toDateString(),
    id: 'asdfghjklwertyu',
  },
}

const tweet: Tweet = {
  content: '234567890',
  user: user.user.id,
  userName: 'name lastName',
  id: '1',
  usersLiked: ['ertyuiop[', 'wertyuio'],
  date: new Date(2023, 1, 12).getTime(),
}

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const afterDelete = jest.fn()

jest.mock('@/api/tweets', () => ({
  deleteTweet: jest.fn(),
  toggleLike: jest.fn(),
}))

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)
    render(<TweetContainer tweet={tweet} afterDelete={afterDelete} />)
  })

  it('Check tweet content', async () => {
    expect(screen.getByText(tweet.content)).toBeInTheDocument()
  })

  it('Check author name', async () => {
    expect(screen.getByText(tweet.userName)).toBeInTheDocument()
  })

  it('Check like amount', async () => {
    expect(screen.getByText(tweet.usersLiked.length)).toBeInTheDocument()
  })

  it('Check like tweet', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText(tweet.usersLiked.length))
    })
    expect(screen.getByText(tweet.usersLiked.length + 1)).toBeInTheDocument()
  })
})
