import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.aside<{ $show: boolean }>`
  position: relative;
  width: ${({ theme: { SIZES } }) => SIZES.LEFT_SIDE_BAR}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: 100%;
    display: ${({ $show }) => ($show ? 'block' : 'none')};
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
`

const Input = styled.input`
  width: 100%;
  margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border: none;
  outline: none;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  &::placeholder {
    color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
  }
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  }
`

const Posts = styled.li`
  min-width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: 100%;
  }
`

const ImgButton = styled.button`
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

const Message = styled.p`
  text-align: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export { Container, ImgButton, Input, InputContainer, Message, Posts }
