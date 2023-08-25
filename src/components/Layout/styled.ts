import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.L}px) {
    justify-content: space-between;
  }
`
export const Menu = styled.button`
  width: ${({ theme: { SIZES } }) => SIZES.TOP_SHIFT}px;
  height: ${({ theme: { SIZES } }) => SIZES.TOP_SHIFT}px;
  margin: ${({ theme: { SPACES } }) => SPACES.S}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: none;
  display: none;
`
export const LeftMenu = styled(Menu)`
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: block;
  }
`
export const RightMenu = styled(Menu)`
  @media (max-width: ${BREAKPOINTS.M}px) {
    display: block;
  }
`
export const Content = styled.div`
  display: 'block';
  width: 100%;
`
