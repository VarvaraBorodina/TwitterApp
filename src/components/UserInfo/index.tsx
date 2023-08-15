import { useState } from 'react'
import { useSelector } from 'react-redux'

import wallpaper from '/img/wallpaper.png'
import EditForm from '@/components/EditForm'
import Modal from '@/components/Modal'
import { ALT, ICONS, TEXT } from '@/constants'
import { User } from '@/types'
import { getAge } from '@/utils'

import {
  Button,
  Container,
  Header,
  Img,
  Info,
  Menu,
  Name,
  Profile,
  UserData,
} from './styled'
import { UserInfoProps } from './types'

const UserInfo = ({ toggleShowMenu, toggleShowSearch }: UserInfoProps) => {
  const user: User = useSelector(({ user }) => user.user)
  const [isModal, setIsModal] = useState<boolean>(false)

  const handleEdit = () => {
    setIsModal(true)
  }

  return (
    <Container>
      {isModal && (
        <Modal setIsActive={setIsModal}>
          <EditForm showModal={setIsModal} />
        </Modal>
      )}
      <Header>
        <Menu onClick={toggleShowMenu}>{ICONS.menu}</Menu>
        <div>
          <Name>{`${user?.name} ${user?.lastName}`}</Name>
          <Info>{`10 ${TEXT.TWEETS.toLowerCase()}`}</Info>
        </div>
        <Menu onClick={toggleShowSearch}>{ICONS.search}</Menu>
      </Header>
      <Img src={wallpaper} alt={ALT.COVER} />
      <Profile>
        <Button onClick={handleEdit}>{TEXT.EDIT}</Button>
      </Profile>
      <UserData>
        {ICONS.userImg}
        <Name>{`${user?.name} ${user?.lastName}`}</Name>
        <Info>{`${user?.telegram ?? ''} ${
          user?.dateOfBirth
            ? ` ${getAge(new Date(user.dateOfBirth))} ${TEXT.AGE}`
            : ''
        }`}</Info>
      </UserData>
    </Container>
  )
}

export default UserInfo