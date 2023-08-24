import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'
import { TweetButton } from '@/styles/common'

export const Container = styled.aside<{ show: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme: { SIZES } }) => SIZES.LEFT_SIDE_BAR}px;
  padding: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    display: ${({ show }) => (show ? 'flex' : 'none')};
  }
`

export const Content = styled.div``

export const Pages = styled.nav`
  display: flex;
  flex-direction: column;
`

export const PageLink = styled(Link)<{ type: string }>`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  path {
    fill: ${({ theme: { COLOR_THEME, COLORS }, type }) =>
      type ? COLORS.ACCENT : COLOR_THEME.TEXT_COLOR};
  }
  rect {
    fill: ${({ theme: { COLOR_THEME, COLORS }, type }) =>
      type ? COLORS.ACCENT : COLOR_THEME.TEXT_COLOR};
  }
`

export const LinkName = styled.p<{ type: string }>`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  color: ${({ theme: { COLOR_THEME, COLORS }, type }) =>
    type ? COLORS.ACCENT : COLOR_THEME.TEXT_COLOR};

  transition: background-color 0.2s;
  &:hover {
    transition: color 0.2s;
    color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  }
`

export const Button = styled(TweetButton)`
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
`

export const LightButton = styled(Button)`
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const UserImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
`

export const UserName = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
