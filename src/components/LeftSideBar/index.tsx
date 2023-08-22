import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { logOut } from '@/api/auth'
import { ALT, ICONS, IMGS, PAGES, ROUTES_NAMES, TEXT } from '@/constants'
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

const { HOME, PROFILE } = ROUTES_NAMES
const { CLOSE } = ICONS
const { LOGO: LOGO_IMG, USER_IMG } = IMGS
const { LOGO: LOGO_ALT, USER } = ALT
const { TWEET_BUTTON, LOGOUT } = TEXT

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
    navigate(HOME)
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
      <ImgButton onClick={handleClose}>{CLOSE}</ImgButton>
      <Content>
        <LogoImg src={LOGO_IMG} alt={LOGO_ALT} />
        <Pages>
          {PAGES.map(({ icon, url, name }) => {
            const type = pathname === url ? 'current' : ''
            return (
              <PageLink to={url} key={name} type={type}>
                {icon}
                <LinkName type={type}>{name}</LinkName>
              </PageLink>
            )
          })}
        </Pages>

        <AccentButton onClick={handleAddTweet}>{TWEET_BUTTON}</AccentButton>
        <UserInfo>
          <Img src={USER_IMG} alt={USER} />
          <UserName>{`${user?.name} ${user?.lastName}`}</UserName>
        </UserInfo>
        {pathname === PROFILE && (
          <Button onClick={handleLogOut}>{LOGOUT}</Button>
        )}
      </Content>
    </Container>
  )
}

export default memo(LeftSideBar)
