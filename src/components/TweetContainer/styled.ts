import { styled } from 'styled-components'

import { BREAKPOINTS } from '@/constants'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
`

export const TweetImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: none;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.L}px) {
    flex-direction: column;
    align-items: start;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const Title = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  }
`

export const DateString = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
  @media (max-width: ${BREAKPOINTS.L}px) {
    margin-left: 0px;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

export const Text = styled.p`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.M}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

export const PostImg = styled.img`
  max-width: ${({ theme: { SIZES } }) => SIZES.POST_IMG_HEIGHT}px;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.M}px;
  margin: 0 auto;
  display: block;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

export const Buttons = styled.div`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  display: flex;
  justify-content: space-between;
`
export const Like = styled.div<{ $isLiked: boolean }>`
  margin-left: ${({ theme: { SPACES } }) => SPACES.XS}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLORS, COLOR_THEME }, $isLiked }) =>
    $isLiked ? COLORS.LIKE_COLOR : COLOR_THEME.TEXT_COLOR};
`

export const LikeIcon = styled.div<{ $isLiked: boolean }>`
  display: flex;
  align-items: center;
  path {
    fill: ${({ theme: { COLORS, COLOR_THEME }, $isLiked }) =>
      $isLiked ? COLORS.LIKE_COLOR : COLOR_THEME.TEXT_COLOR};
  }
`

export const ImgButton = styled.button`
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: pointer;
`
