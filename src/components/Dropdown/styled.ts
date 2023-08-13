import { styled } from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  position: relative;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    margin-right: 0px;
  }
`

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
  max-width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;

  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  cursor: pointer;
`

const Option = styled.ul`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  }
`
const OptionContainer = styled.li`
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
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  overflow-y: auto;
  z-index: 1;
`
const Title = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
const Img = styled.img`
  padding-left: ${({ theme: { SPACES } }) => SPACES.M}px;
`

export { Container, Img, Input, Option, OptionContainer, Title }
