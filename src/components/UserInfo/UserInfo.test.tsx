import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import MockWrapper from '@/components/MockWrapper'
import * as hooks from '@/hooks'
import { getAge } from '@/utils'

import UserInfo from '.'

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
    telegram: 'wertyu',
  },
}

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

jest.mock('@/api/user', () => ({
  changePassword: jest.fn(),
  changeUser: jest.fn(),
  searchUsers: jest.fn(),
}))

jest.mock('@/store/slices/tweetsSlice', () => ({
  tweetsAmountSelector: jest.fn(),
}))

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest
      .spyOn(hooks, 'useTypedSelector')
      .mockReturnValueOnce(user.user)
      .mockReturnValueOnce(5)
      .mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<UserInfo />)
  })

  it('Check user name', async () => {
    expect(
      screen.queryAllByText(`${user.user.name} ${user.user.lastName}`)
    ).toHaveLength(2)
  })

  it('Check tweets amount', async () => {
    expect(screen.queryByText('5 tweets')).toBeInTheDocument()
  })

  it('Check telegram', async () => {
    expect(
      screen.queryByText(
        `@${user.user.telegram} ${getAge(
          new Date(user.user.dateOfBirth)
        )} years old`
      )
    ).toBeInTheDocument()
  })

  it('Check edit button', async () => {
    expect(screen.queryByText('Edit profile')).toBeInTheDocument()
  })

  it('Check open modal on edit', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Edit profile'))
    })
    expect(screen.queryAllByText('Edit profile')).toHaveLength(2)
  })
})
