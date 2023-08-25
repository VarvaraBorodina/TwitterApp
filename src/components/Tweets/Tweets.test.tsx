import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import { MockWrapper } from '@/components/MockWrapper'
import * as hooks from '@/hooks'
import { Tweet } from '@/types'

import { Tweets } from '.'

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

const tweet1: Tweet = {
  content: '234567890',
  user: user.user.id,
  userName: 'name lastName',
  id: '1',
  usersLiked: ['ertyuiop[', 'wertyuio'],
  date: new Date(2023, 1, 12).getTime(),
}

const tweet2: Tweet = {
  content: 'dcvhsxiuw',
  user: user.user.id,
  userName: 'name1 lastName1',
  id: '2',
  usersLiked: ['ertyuiop[', 'wertyuio', 'asdfghjklwertyu'],
  date: new Date(2023, 5, 6).getTime(),
}

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

jest.mock('@/api/tweets', () => ({
  deleteTweet: jest.fn(),
  toggleLike: jest.fn(),
}))

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(false)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)
  })

  it('Check tweet contents', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(screen.getByText(tweet1.content)).toBeInTheDocument()
    expect(screen.getByText(tweet2.content)).toBeInTheDocument()
  })

  it('Check authors', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(screen.getByText(tweet1.userName)).toBeInTheDocument()
    expect(screen.getByText(tweet2.userName)).toBeInTheDocument()
  })

  it('Check dates', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(
      screen.getByText(new Date(tweet1.date).toDateString())
    ).toBeInTheDocument()
    expect(
      screen.getByText(new Date(tweet2.date).toDateString())
    ).toBeInTheDocument()
  })

  it('Check likes', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(screen.getByText(tweet1.usersLiked.length)).toBeInTheDocument()
    expect(screen.getByText(tweet2.usersLiked.length)).toBeInTheDocument()
  })

  it('Check add tweet button', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(screen.getByText('Tweet')).toBeInTheDocument()
  })

  it('Check new tweet form', async () => {
    render(<Tweets tweets={[tweet1, tweet2]} />)
    expect(screen.getByPlaceholderText("What's happening")).toBeInTheDocument()
  })

  it('Check non tweet', async () => {
    render(<Tweets tweets={[]} />)
    expect(screen.getByText('No tweet yet :(')).toBeInTheDocument()
  })
})
