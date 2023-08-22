import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
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

export { Buttons, Container, FileName, Form, ImgButton, Input, Uploader }
