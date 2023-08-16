import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.aside<{ $show: boolean }>`
  width: ${({ theme: { SIZES } }) => SIZES.LEFT_SIDE_BAR}px;
  margin: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: ${({ $show }) => ($show ? 'block' : 'none')};
    margin: ${({ theme: { SPACES } }) => SPACES.S}px;
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { SPACES } }) => SPACES.S}px
    ${({ theme: { SPACES } }) => SPACES.M}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const Input = styled.input`
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border: none;
  outline: none;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  }
`

const Posts = styled.li`
  min-width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const ImgButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  display: none;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.L}px) {
    margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
    display: block;
  }
`

const Message = styled.p`
  text-align: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

export { Container, ImgButton, Input, InputContainer, Message, Posts }
