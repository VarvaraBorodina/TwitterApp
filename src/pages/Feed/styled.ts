import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  padding-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  padding-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  width: 100%;
  border-bottom: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.L}px) {
    border: none;
  }
`
const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

const Title = styled.h3`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
`

export { Header, Title, TweetError }
