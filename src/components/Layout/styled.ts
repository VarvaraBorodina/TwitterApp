import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`
const Header = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.L}px) {
    justify-content: space-between;
  }
`

const Menu = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.TOP_SHIFT}px;
  height: ${({ theme: { SIZES } }) => SIZES.TOP_SHIFT}px;
  margin: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: none;
  display: none;
`

const LeftMenu = styled(Menu)`
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: block;
  }
`

const RightMenu = styled(Menu)`
  @media (max-width: ${BREAKPOINTS.M}px) {
    display: block;
  }
`

export { Container, Header, LeftMenu, RightMenu, TweetError }
