import { useNavigate } from 'react-router-dom'

import { logInWithGoogle } from '@/api/auth'
import { ALT, IMGS, ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch } from '@/hooks'

import {
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
} from './styled'

const { BACK_TWITTER, LOGO: ALT_LOGO, GOOGLE: ALT_GOOGLE } = ALT
const { PROFILE, SIGNUP, HOME, LOGIN } = ROUTES_NAMES
const {
  HOME_TITLE,
  HOME_SUBTITLE,
  SIGN_UP_GOOGLE,
  SIGN_UP_EMAIL,
  POLICY_TEXT,
  TERM,
  POLICY,
  COOKIE,
  LOGIN: LOGIN_BUTTON_TEXT,
  LOGIN_TEXT,
} = TEXT

const { BACK, LOGO, GOOGLE } = IMGS

export const Home = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleOnGoogleLogIn = async () => {
    await dispatch(logInWithGoogle())
    navigate(PROFILE)
  }

  const handleOnEmailSignUp = () => {
    navigate(SIGNUP)
  }

  return (
    <Container>
      <Img src={BACK} alt={BACK_TWITTER} />
      <Section>
        <LogoImg src={LOGO} alt={ALT_LOGO} />
        <Title>{HOME_TITLE}</Title>
        <SubTitle>{HOME_SUBTITLE}</SubTitle>
        <Button onClick={handleOnGoogleLogIn}>
          <GoogleLogo src={GOOGLE} alt={ALT_GOOGLE} />
          {SIGN_UP_GOOGLE}
        </Button>
        <Button onClick={handleOnEmailSignUp}>{SIGN_UP_EMAIL}</Button>
        <Info>
          {POLICY_TEXT[0]}
          <InfoLink to={HOME}>{TERM}</InfoLink>
          {POLICY_TEXT[1]}
          <InfoLink to={HOME}>{POLICY}</InfoLink>
          {POLICY_TEXT[2]}
          <InfoLink to={HOME}>{COOKIE}</InfoLink>.
        </Info>
        <Info>
          {LOGIN_TEXT}
          <InfoLink to={LOGIN}>{LOGIN_BUTTON_TEXT}</InfoLink>
        </Info>
      </Section>
    </Container>
  )
}
