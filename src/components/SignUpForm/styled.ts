import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BREAKPOINTS } from '@/constants'

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  margin: 0 auto;
  margin-top: ${({ theme: { SPACES } }) => SPACES.XL}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const LogoImg = styled.img`
  width: ${({ theme: { SIZES } }) => SIZES.LOGO_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
`

const Title = styled.h1`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
`

const SubTitle = styled.h3`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
`

const Input = styled.input`
  align-items: center;
  width: ${({ theme: { SIZES } }) => SIZES.SMALL_INPUT_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  background-color: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const Inputs = styled.div`
  display: flex;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
    flex-direction: column;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme: { SIZES } }) => SIZES.INPUT_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.INPUT_HEIGHT}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.XL}px;
  background-color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  color: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
  border: solid ${({ theme: { SIZES } }) => SIZES.BORDER}px
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.M}px) {
    width: ${({ theme: { SIZES } }) => SIZES.MAX_INPUT_WIDTH}vw;
  }
`

const Error = styled.p`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
`

const SignUp = styled(Link)`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S}px;
  color: ${({ theme: { COLORS } }) => COLORS.ACCENT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

const Info = styled.p`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  opacity: ${({ theme: { OPACITIES } }) => OPACITIES.L};
`

export {
  Button,
  Error,
  Form,
  Info,
  Input,
  Inputs,
  LogoImg,
  SignUp,
  SubTitle,
  Title,
}
