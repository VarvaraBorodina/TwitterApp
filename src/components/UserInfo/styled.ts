import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'
import { TweetButton } from '@/styles/common'

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-left: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-right: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-bottom: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    border: none;
  }
`
export const Name = styled.h6`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  padding-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export const Info = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XS}px;
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.XS}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
`

export const WallpaperImg = styled.img`
  width: 100%;
`

export const UserImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.PROFILE_IMG_WIDTH}px;
`

export const UserData = styled.div`
  position: absolute;
  bottom: ${({ theme: { SIZES } }) => SIZES.LOGO_WIDTH}px;
  width: ${({ theme: { SIZES } }) => SIZES.DROPDOWN}px;
`

export const Button = styled(TweetButton)`
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export const Profile = styled.div`
  text-align: right;
`
export const Header = styled.div`
  @media (max-width: ${BREAKPOINTS.L}px) {
    justify-content: space-between;
  }
`
