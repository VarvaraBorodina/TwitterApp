import React from 'react'
import { useNavigate } from 'react-router-dom'

import backTwitter from '/img/back-twitter.png'
import google from '/img/google.png'
import logo from '/img/logo.png'
import { logInWithGoogle } from '@/api/auth'
import { ALT, ROUTES_NAMES, TEXT } from '@/constants'
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

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleOnGoogleLogIn = async () => {
    await dispatch(logInWithGoogle())
    navigate(ROUTES_NAMES.PROFILE)
  }

  const handleOnEmailSignUp = () => {
    navigate(ROUTES_NAMES.SIGNUP)
  }

  return (
    <Container>
      <Img src={backTwitter} alt={ALT.BACK_TWITTER} />
      <Section>
        <LogoImg src={logo} alt={ALT.LOGO} />
        <Title>{TEXT.HOME_TITLE}</Title>
        <SubTitle>{TEXT.HOME_SUBTITLE}</SubTitle>
        <Button onClick={handleOnGoogleLogIn}>
          <GoogleLogo src={google} alt={ALT.GOOGLE} />
          {TEXT.SIGN_UP_GOOGLE}
        </Button>
        <Button onClick={handleOnEmailSignUp}>{TEXT.SIGN_UP_EMAIL}</Button>
        <Info>
          {TEXT.POLICY_TEXT[0]}
          <InfoLink to={ROUTES_NAMES.HOME}>{TEXT.TERM}</InfoLink>
          {TEXT.POLICY_TEXT[1]}
          <InfoLink to={ROUTES_NAMES.HOME}>{TEXT.POLICY}</InfoLink>
          {TEXT.POLICY_TEXT[2]}
          <InfoLink to={ROUTES_NAMES.HOME}>{TEXT.COOKIE}</InfoLink>.
        </Info>
        <Info>
          {TEXT.LOGIN_TEXT}
          <InfoLink to={ROUTES_NAMES.LOGIN}>{TEXT.LOGIN}</InfoLink>
        </Info>
      </Section>
    </Container>
  )
}

export default Home
