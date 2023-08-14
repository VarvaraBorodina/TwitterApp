import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  width: 100%;
  border-left: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  border-right: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
`
const Name = styled.h6`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  padding-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const Info = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XS}px;
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.XS}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
`

const Img = styled.img`
  width: 100%;
`

const UserImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.PROFILE_IMG_WIDTH}px;
`

const UserData = styled.div`
  position: relative;
  top: -150px;
`

const Button = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const Profile = styled.div`
  text-align: right;
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
  margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: none;
  display: none;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: block;
  }
`

export {
  Button,
  Container,
  Header,
  Img,
  Info,
  Menu,
  Name,
  Profile,
  UserData,
  UserImg,
}
