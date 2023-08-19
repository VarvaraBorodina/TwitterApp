import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '../MockWrapper'
import Dropdown from '.'

const setTitleMock = jest.fn()
const options = ['qw', 'er', 'ty', 'ui']

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Dropdown', () => {
  it('Dropdown is not open', async () => {
    render(
      <Dropdown
        title="Dropdown"
        changeOption={setTitleMock}
        options={options}
      />
    )

    expect(screen.queryByText('Dropdown')).toBeInTheDocument()
    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeNull()
    })
  })

  it('Dropdown open on click', async () => {
    render(
      <Dropdown
        title="Dropdown"
        changeOption={setTitleMock}
        options={options}
      />
    )

    fireEvent.click(screen.getByText('Dropdown'))
    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeInTheDocument()
    })
  })
})
