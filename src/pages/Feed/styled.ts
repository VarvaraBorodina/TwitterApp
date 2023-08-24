import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  padding-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  padding-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  width: 100%;
  border-bottom: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.L}px) {
    border: none;
  }
`
export const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
`

export const Title = styled.h3`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
`

export const Ellipse = styled.div<{ $isLeft: boolean }>`
  position: relative;
  width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT}px;
  height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT}px;
  transition: transform 0.5s;

  &:before {
    content: '';
    position: absolute;
    width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    top: 50%;
    left: ${({ theme: { SPACES } }) => SPACES.XS}px;
    background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
    transform: translate(${({ $isLeft }) => ($isLeft ? '0%' : '100%')}, -50%);
  }
  cursor: pointer;
`
