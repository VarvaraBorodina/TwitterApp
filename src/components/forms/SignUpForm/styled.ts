import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'
import { FormButton } from '@/styles/common'

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  margin: 0 auto;
  margin-top: ${({ theme: { SPACES } }) => SPACES.XL}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const Button = styled(FormButton)`
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
`

export { Button, Form }
