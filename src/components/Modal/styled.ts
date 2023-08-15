import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
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

const Content = styled.div`
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  border-radius: 12px;
  border: solid ${({ theme: { SPACES } }) => SPACES.XS}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: auto;
  @media (max-width: ${BREAKPOINTS.L}px) {
    padding: ${({ theme: { SPACES } }) => SPACES.XS}px;
  }
`

export { Container, Content }
