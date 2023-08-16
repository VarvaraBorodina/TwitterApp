import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  width: 50vw;
  border-bottom: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    border: none;
    width: 90vw;
  }
`
const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

const Title = styled.h3`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
`

export { Header, Title, TweetError }
