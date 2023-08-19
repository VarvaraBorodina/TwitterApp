import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'
import * as hooks from '@/hooks'

import ThemeToggle from '.'

const mockDispatch = jest.fn()

jest.mock('@/hooks')

jest.mock('@/api/auth', () => ({
  logOut: jest.fn(),
}))

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useTypedSelector').mockReturnValue('LIGHT')
    jest.spyOn(hooks, 'useTypedDispatch').mockReturnValue(mockDispatch)

    render(<ThemeToggle />)
  })

  it('Check toggle', async () => {
    expect(screen.getByTestId('toggle')).toBeInTheDocument()
  })

  it('Check theme change', async () => {
    fireEvent.click(screen.getByTestId('toggle'))

    expect(mockDispatch).toBeCalledTimes(1)
    mockDispatch.mockReset()
  })

  it('Check theme change', async () => {
    fireEvent.click(screen.getByTestId('toggle'))
    fireEvent.click(screen.getByTestId('toggle'))

    expect(mockDispatch).toBeCalledTimes(2)
    mockDispatch.mockReset()
  })
})
