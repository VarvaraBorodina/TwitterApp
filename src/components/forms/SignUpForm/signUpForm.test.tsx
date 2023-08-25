import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockWrapper } from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import { SignUpForm } from '.'

const mockDispatch = jest.fn()

jest.mock('@/hooks')

/*const user = {
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
}*/

jest.mock('@/api/auth', () => ({
  signUp: jest.fn(),
}))

jest.mock('@/store/slices/userSlice', () => ({
  resetError: jest.fn(),
}))

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Sign up Form', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue('Error')
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<SignUpForm />)
  })

  it('Check header', async () => {
    expect(screen.queryByText('Create an account')).toBeInTheDocument()
  })

  it('Check date is required', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Sign Up To Twitter'))
    })

    expect(screen.queryByText('day is a required field')).toBeInTheDocument()
  })

  it('Check email is required', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Sign Up To Twitter'))
    })

    expect(screen.queryByText('email is a required field')).toBeInTheDocument()
  })

  it('Password is required', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Sign Up To Twitter'))
    })

    expect(
      screen.queryByText('password is a required field')
    ).toBeInTheDocument()
  })

  it('No sign up with invalid fields', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Sign Up To Twitter'))
    })

    expect(mockDispatch).toBeCalledTimes(0)
  })
})
