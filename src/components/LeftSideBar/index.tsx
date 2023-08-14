import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import logo from '/img/logo.png'
import userImg from '/img/userImg.png'
import { ALT, ICONS, PAGES, ROUTES_NAMES, TEXT } from '@/constants'
import { logOut } from '@/store/slices/userSlice'
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

const LeftSideBar = ({ toggle, show }: ToggleShowProps) => {
  const { pathname } = useLocation()
  const user: User = useSelector(({ user }) => user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    if (toggle) {
      toggle()
    }
    dispatch(logOut())
    navigate(ROUTES_NAMES.HOME)
  }

  const handleClose = () => {
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
                <LinkName $isCurrent={pathname === url}>{name}</LinkName>
              </PageLink>
            )
          })}
        </Pages>

        <AccentButton>{TEXT.TWEET_BUTTON}</AccentButton>
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

export default LeftSideBar
