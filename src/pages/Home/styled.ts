import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
`

const Img = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: ${BREAKPOINTS.L}px) {
    display: none;
  }
`

const Section = styled.section`
  padding-left: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    margin: 0 auto;
    padding-top: ${({ theme: { SPACES } }) => SPACES.L}px;
    padding-left: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
`

const LogoImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.BIG_LOGO_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
`

const GoogleLogo = styled.img`
  width: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
`

const Title = styled.h1`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XL}px;
  @media (max-width: ${BREAKPOINTS.L}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  }
`

const SubTitle = styled.h1`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme: { SIZES } }) => SIZES.HOME_PAGE_BUTTON_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.HOME_PAGE_BUTTON_HEIGHT}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  background-color: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.M};
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.L}px) {
    width: 100%;
  }
`
const Info = styled.p`
  width: ${({ theme: { SIZES } }) => SIZES.HOME_PAGE_BUTTON_WIDTH}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  @media (max-width: ${BREAKPOINTS.L}px) {
    width: 100%;
  }
`

const InfoLink = styled(Link)`
  color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

export {
  Button,
  Container,
  GoogleLogo,
  Img,
  Info,
  InfoLink,
  LogoImg,
  Section,
  SubTitle,
  Title,
}
