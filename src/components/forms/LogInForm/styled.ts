import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Form = styled.form`
  width: ${({ theme: { SIZES } }) => SIZES.LOGIN_FORM_WIDTH}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  margin: 0 auto;
  margin-top: ${({ theme: { SPACES } }) => SPACES.XL}px;
`

export const SubTitle = styled.h1`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
`

export const Input = styled.input`
  align-items: center;
  width: ${({ theme: { SIZES } }) => SIZES.LOGIN_FORM_WIDTH}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  height: ${({ theme: { SIZES } }) => SIZES.HOME_PAGE_BUTTON_HEIGHT}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  padding-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  background-color: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme: { SIZES } }) => SIZES.LOGIN_FORM_WIDTH}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  height: ${({ theme: { SIZES } }) => SIZES.HOME_PAGE_BUTTON_HEIGHT}px;
  background-color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  color: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
`
export const SignUp = styled(Link)`
  display: inline-block;
  width: ${({ theme: { SIZES } }) => SIZES.LOGIN_FORM_WIDTH}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  text-align: right;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
`
