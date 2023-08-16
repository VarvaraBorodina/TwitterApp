import { styled } from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  display: flex;
  max-width: ${({ theme: { SIZES } }) => SIZES.PROFILE_WIDTH}px;
  border-top: solid ${({ theme: { SIZES } }) => SIZES.PROFILE_BORDER}px
    ${({ theme: { COLORS } }) => COLORS.BORDER};
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
`

const Img = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: none;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.L}px) {
    flex-direction: column;
    align-items: start;
  }
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Title = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  }
`

const DateString = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
  @media (max-width: ${BREAKPOINTS.L}px) {
    margin-left: 0px;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

const Text = styled.p`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${BREAKPOINTS.M}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

const PostImg = styled.img`
  max-width: ${({ theme: { SIZES } }) => SIZES.POST_IMG_HEIGHT}px;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.M}px;
  margin: 0 auto;
  display: block;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const Buttons = styled.div`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  display: flex;
  justify-content: space-between;
`

const ImgButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: pointer;
`

const Like = styled.p<{ $isLiked: boolean }>`
  margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLORS, COLOR_THEME }, $isLiked }) =>
    $isLiked ? COLORS.LIKE_COLOR : COLOR_THEME.TEXT_COLOR};
`

export {
  Buttons,
  Container,
  Content,
  DateString,
  Img,
  ImgButton,
  Info,
  Like,
  PostImg,
  Text,
  Title,
}
