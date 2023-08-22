import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'
import { FormButton } from '@/styles/common'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  margin: 0 auto;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`
const Button = styled(FormButton)`
  padding: ${({ theme: { SPACES } }) => SPACES.S}px;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
`

export { Button, Form }
