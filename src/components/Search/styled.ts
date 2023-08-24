import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Container = styled.aside<{ show: string }>`
  position: relative;
  width: ${({ theme: { SIZES } }) => SIZES.LEFT_SIDE_BAR}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: 100%;
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
`

export const Input = styled.input`
  width: 100%;
  margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border: none;
  outline: none;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  &::placeholder {
    color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
  }
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.BUTTON_WIDTH}px;
  }
`

export const Posts = styled.li`
  min-width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: 100%;
  }
`

export const Message = styled.p`
  text-align: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
