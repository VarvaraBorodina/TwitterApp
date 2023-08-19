import 'jest-styled-components'

import {
  act,
  fireEvent,
  render as RTLrender,
  screen,
} from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'
import { PAGES } from '@/constants'
import * as hooks from '@/hooks'

import LeftSideBar from '.'

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

const toggle = jest.fn()
const showToggle = jest.fn()

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<LeftSideBar show={true} toggle={toggle} showModal={showToggle} />)
  })

  it('Check tweet button', async () => {
    expect(screen.getByText('Tweet')).toBeInTheDocument()
  })

  it('Check show modal to create Tweet', async () => {
    await act(() => {
      fireEvent.click(screen.getByText('Tweet'))
    })

    expect(showToggle).toBeCalledTimes(1)
  })

  PAGES.forEach(({ name }) => {
    it(`Check ${name} page`, async () => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
