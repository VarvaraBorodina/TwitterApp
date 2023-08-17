import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.aside<{ $show: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme: { SIZES } }) => SIZES.LEFT_SIDE_BAR}px;
  padding: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
  }
`

const Content = styled.div``

const LogoImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.LOGO_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
`

const Pages = styled.nav`
  display: flex;
  flex-direction: column;
`

const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  path {
    fill: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  }
  rect {
    fill: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  }
`

const LinkName = styled.p<{ $isCurrent: boolean }>`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS }, $isCurrent }) =>
    $isCurrent ? FONTS.XL : FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const Button = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
  border: none;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  cursor: pointer;
  transition: background-color 0.5s;
  transition: width 0.5s;
  &:hover {
    transition: background-color 0.5s;
    transition: width 0.5s;
    background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_HOVER}px;
  }
`

const AccentButton = styled(Button)`
  background-color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

const Img = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
`

const UserName = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const ImgButton = styled.button`
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  display: none;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: block;
  }
`

export {
  AccentButton,
  Button,
  Container,
  Content,
  Img,
  ImgButton,
  LinkName,
  LogoImg,
  PageLink,
  Pages,
  UserInfo,
  UserName,
}
