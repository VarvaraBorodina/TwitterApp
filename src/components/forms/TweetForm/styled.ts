import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
`

const Img = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: none;
  }
`

const Input = styled.textarea`
  width: 100%;
  height: ${({ theme: { SIZES } }) => SIZES.DROPDOWN_HEIGHT}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  &::placeholder {
    color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
  }
  border: none;
  resize: none;
  outline: none;
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  }
`

const Form = styled.div`
  width: 100%;
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BUTTON_HEIGHT}px;

  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
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

const ImgButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: pointer;
`

const Uploader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
`

const FileName = styled.div`
  margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

const Error = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export {
  Button,
  Buttons,
  Container,
  Error,
  FileName,
  Form,
  Img,
  ImgButton,
  Input,
  Uploader,
}
