import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'
import { FormButton } from '@/styles/common'

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  margin: 0 auto;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
    margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
`

export const Button = styled(FormButton)`
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`
