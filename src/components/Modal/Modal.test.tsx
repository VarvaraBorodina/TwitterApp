import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import Modal from '.'

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

jest.mock('@/api/auth', () => ({
  logOut: jest.fn(),
}))

const setIsActive = jest.fn()

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const content = 'content'

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<Modal setIsActive={setIsActive}>{content}</Modal>)
  })

  it('Check content', async () => {
    expect(screen.getByText(content)).toBeInTheDocument()
  })
})
