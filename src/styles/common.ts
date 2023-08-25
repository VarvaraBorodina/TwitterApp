import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const LogoImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
`
export const Error = styled.p`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLORS } }) => COLORS.ERROR};
`
export const Title = styled.h1`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.M}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
    margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
`

export const SubTitle = styled.h3`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
`

export const SignUp = styled(Link)`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
`

export const Info = styled.p`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
`

export const Input = styled.input`
  align-items: center;
  width: ${({ theme: { SIZES } }) => SIZES.SMALL_INPUT_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`
export const Inputs = styled.div`
  display: flex;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
    flex-direction: column;
  }
`

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

export const TweetButton = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;

  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  background-color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  border: none;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  cursor: pointer;
  transition: opacity 0.5s;
  transition: width 0.5s;
  &:hover {
    transition: opacity 0.5s;
    transition: width 0.5s;
    opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_HOVER}px;
  }
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}px;
    height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;
  }
`

export const UserImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: none;
  }
`

export const ImgButton = styled.button`
  position: absolute;
  top: ${({ theme: { SPACES } }) => SPACES.M}px;
  right: ${({ theme: { SPACES } }) => SPACES.M}px;
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  display: none;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.M}px) {
    display: block;
  }
`
