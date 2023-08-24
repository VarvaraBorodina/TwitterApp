import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockWrapper } from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import { LogInForm } from '.'

const mockDispatch = jest.fn()

jest.mock('@/hooks')

jest.mock('@/api/auth', () => ({
  logInWithPhoneNumber: jest.fn(),
  logInWithEmail: jest.fn(),
}))

jest.mock('@/store/slices/userSlice', () => ({
  resetError: jest.fn(),
}))

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Log in Form', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue('Error')
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<LogInForm />)
  })

  it('Check header', async () => {
    expect(screen.queryByText('Log in')).toBeInTheDocument()
  })

  it('Check email is required', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Log in'))
    })

    expect(screen.queryByText('Email / Phone is required')).toBeInTheDocument()
  })

  it('Password is required', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Log in'))
    })

    expect(
      screen.queryByText('password is a required field')
    ).toBeInTheDocument()
  })
})
