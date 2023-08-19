import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import MockWrapper from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import LoginForm from '.'

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

jest.mock('@/api/tweets', () => ({
  addTweet: jest.fn(),
}))

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Tweet Form', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<LoginForm />)
  })

  it('Check header', async () => {
    expect(screen.getByPlaceholderText("What's happening")).toBeInTheDocument()
  })

  it('Check no empty tweet created', async () => {
    await act(() => {
      fireEvent.click(screen.getByText('Tweet'))
    })

    expect(mockDispatch).toBeCalledTimes(0)
  })

  it('Check no empty tweet message', async () => {
    await act(() => {
      fireEvent.click(screen.getByText('Tweet'))
    })

    expect(screen.getByText('Unable to add empty tweet')).toBeInTheDocument()

    expect(mockDispatch).toBeCalledTimes(0)
  })

  it('Not empty tweet created', async () => {
    const form = screen.getByPlaceholderText("What's happening")

    await act(async () => {
      fireEvent.change(form, { target: { value: 'pppp' } })
      fireEvent.click(screen.getByText('Tweet'))
    })

    expect(mockDispatch).toBeCalledTimes(1)
  })

  it('Check new tweet message', async () => {
    const form = screen.getByPlaceholderText("What's happening")
    mockDispatch.mockReset()

    await act(async () => {
      fireEvent.change(form, { target: { value: 'pppp' } })
      fireEvent.click(screen.getByText('Tweet'))
    })

    expect(mockDispatch).toBeCalledTimes(1)
    expect(screen.getByText('Tweet is created')).toBeInTheDocument()
  })
})
