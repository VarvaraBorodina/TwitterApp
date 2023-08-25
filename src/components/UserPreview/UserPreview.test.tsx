import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import { MockWrapper } from '@/components/MockWrapper'
import { Gender, User } from '@/types'

import { UserPreview } from '.'

const clearQuery = jest.fn()

jest.mock('@/hooks')

const user: User = {
  name: 'name',
  lastName: 'lastName',
  email: 'qwer@rt.we',
  phone: '+2234567822',
  gender: Gender.Man,
  dateOfBirth: new Date(2003, 1, 12).toDateString(),
  id: 'asdfghjklwertyu',
  telegram: 'wertyu',
}

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check Left Side Bar', () => {
  beforeEach(() => {
    render(<UserPreview item={user} clearQuery={clearQuery} />)
  })

  it('Check user name', async () => {
    expect(
      screen.getByText(`${user.name} ${user.lastName}`)
    ).toBeInTheDocument()
  })
})
