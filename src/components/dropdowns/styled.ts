import { styled } from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Container = styled.div`
  position: relative;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    margin-right: 0px;
  }
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;

  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  cursor: pointer;
`

export const Option = styled.ul`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  }
`
export const OptionContainer = styled.li`
  position: absolute;
  top: ${({ theme: { SIZES, SPACES } }) => SIZES.INPUT_HEIGHT + SPACES.XS}px;
  left: 0;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  max-height: ${({ theme: { SIZES } }) => SIZES.DROPDOWN_HEIGHT}px;
  padding-left: ${({ theme: { SPACES } }) => SPACES.L}px;
  padding-top: ${({ theme: { SPACES } }) => SPACES.S}px;

  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};

  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  overflow-y: auto;
  z-index: 1;
`
export const Title = styled.input`
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN_INPUT}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  border: none;
  outline: none;
`
export const Img = styled.img`
  padding-left: ${({ theme: { SPACES } }) => SPACES.M}px;
`
