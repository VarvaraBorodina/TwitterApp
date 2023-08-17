import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  position: relative;
  width: 100%;
  border-left: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-right: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-bottom: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    border: none;
  }
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
  position: absolute;
  bottom: ${({ theme: { SIZES } }) => SIZES.LOGO_WIDTH}px;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
`

const Button = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
  transition: opacity 0.5s;
  transition: width 0.5s;
  &:hover {
    transition: opacity 0.5s;
    transition: width 0.5s;
    opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_HOVER}px;
  }
`

const Profile = styled.div`
  text-align: right;
`
const Header = styled.div`
  @media (max-width: ${BREAKPOINTS.L}px) {
    justify-content: space-between;
  }
`

export {
  Button,
  Container,
  Header,
  Img,
  Info,
  Name,
  Profile,
  UserData,
  UserImg,
}
