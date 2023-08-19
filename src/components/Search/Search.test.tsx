import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import MockWrapper from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import Search from '.'

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

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const toggle = jest.fn()
const showToggle = jest.fn()

const getData = jest
  .fn()
  .mockReturnValue(Promise.resolve([{ id: 1 }, { id: 1 }, { id: 1 }]))
const getEmptyData = jest.fn().mockReturnValue(Promise.resolve([]))

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue(user)
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)
  })

  it('Check title', async () => {
    render(
      <Search
        show={true}
        showModal={showToggle}
        toggle={toggle}
        placeholder="title"
        getData={getData}
      />
    )
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument()
  })

  it('Check get data', async () => {
    render(
      <Search
        show={true}
        showModal={showToggle}
        toggle={toggle}
        placeholder="title"
        getData={getData}
      />
    )
    const input = screen.getByPlaceholderText('title')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'wertyu' } })
    })

    expect(getData).toBeCalled()
  })

  it('Check no data', async () => {
    render(
      <Search
        show={true}
        showModal={showToggle}
        toggle={toggle}
        placeholder="title"
        getData={getEmptyData}
      />
    )
    const input = screen.getByPlaceholderText('title')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'wertyu' } })
    })

    expect(screen.getByText('Nothing found')).toBeInTheDocument()
  })
})
