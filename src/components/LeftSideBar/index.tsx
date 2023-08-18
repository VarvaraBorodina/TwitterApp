import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import logo from '/img/logo.png'
import userImg from '/img/userImg.png'
import { logOut } from '@/api/auth'
import { ALT, ICONS, PAGES, ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { resetTheme } from '@/store/slices/themeSlice'
import { ToggleShowProps, User } from '@/types'

import {
  AccentButton,
  Button,
  Container,
  Content,
  Img,
  ImgButton,
  LinkName,
  LogoImg,
  PageLink,
  Pages,
  UserInfo,
  UserName,
} from './styled'

const LeftSideBar = ({ toggle, show, showModal }: ToggleShowProps) => {
  const { pathname } = useLocation()
  const user: User | null = useTypedSelector(({ user }) => user.user)
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    if (toggle) {
      toggle()
    }
    dispatch(logOut())
    dispatch(resetTheme())
    navigate(ROUTES_NAMES.HOME)
  }

  const handleClose = () => {
    if (toggle) {
      toggle()
    }
  }

  const handleAddTweet = () => {
    if (showModal) {
      showModal()
    }
    if (toggle) {
      toggle()
    }
  }

  return (
    <Container $show={show}>
      <ImgButton onClick={handleClose}>{ICONS.close}</ImgButton>
      <Content>
        <LogoImg src={logo} alt={ALT.LOGO} />
        <Pages>
          {PAGES.map(({ icon, url, name }) => {
            return (
              <PageLink to={url} key={name}>
                {icon}
                <LinkName>{name}</LinkName>
              </PageLink>
            )
          })}
        </Pages>

        <AccentButton onClick={handleAddTweet}>
          {TEXT.TWEET_BUTTON}
        </AccentButton>
        <UserInfo>
          <Img src={userImg} alt={ALT.USER} />
          <UserName>{`${user?.name} ${user?.lastName}`}</UserName>
        </UserInfo>
        {pathname === ROUTES_NAMES.PROFILE && (
          <Button onClick={handleLogOut}>{TEXT.LOGOUT}</Button>
        )}
      </Content>
    </Container>
  )
}

export default React.memo(LeftSideBar)
