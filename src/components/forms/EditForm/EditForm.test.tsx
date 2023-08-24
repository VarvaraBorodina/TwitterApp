import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockWrapper } from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import { EditForm } from '.'

const showModal = jest.fn()
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

jest.mock('@/api/user', () => ({
  changePassword: jest.fn(),
  changeUser: jest.fn(),
}))

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Edit Form', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<EditForm showModal={showModal} />)
  })

  it('Check header', async () => {
    expect(screen.queryByText('Edit profile')).toBeInTheDocument()
  })

  it('Close on save', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Save'))
    })

    expect(showModal).toBeCalled()
  })

  it('Change on save', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Save'))
    })

    expect(mockDispatch).toBeCalled()
  })

  it('Check change password', async () => {
    expect(screen.queryByText('Change password')).toBeInTheDocument()
  })

  it('Check change password', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('Change password'))
    })

    expect(screen.queryByText('Required length is 8')).toBeInTheDocument()
  })
})
