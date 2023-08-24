import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
  background-color: ${({ theme: { COLORS } }) => COLORS.MODAL_BACKGROUND};
  @media (max-width: ${BREAKPOINTS.L}px) {
    height: 100%;
  }
`

export const Content = styled.div`
  min-width: ${({ theme: { SIZES } }) => SIZES.MIN_MODAL_WIDTH}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.M}px;
  border: solid ${({ theme: { SPACES } }) => SPACES.XS}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: auto;
  @media (max-width: ${BREAKPOINTS.L}px) {
    min-width: 0px;
    padding: ${({ theme: { SPACES } }) => SPACES.XS}px;
  }
`
