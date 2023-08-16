import { useState } from 'react'
import { useSelector } from 'react-redux'

import wallpaper from '/img/wallpaper.png'
import EditForm from '@/components/EditForm'
import Modal from '@/components/Modal'
import { ALT, ICONS, TEXT } from '@/constants'
import { useTypedSelector } from '@/hooks'
import { User } from '@/types'
import { getAge } from '@/utils'

import {
  Button,
  Container,
  Header,
  Img,
  Info,
  Name,
  Profile,
  UserData,
} from './styled'

const UserInfo = () => {
  const user: User = useSelector(({ user }) => user.user)
  const [isModal, setIsModal] = useState<boolean>(false)

  const tweetAmount = useTypedSelector(({ tweets }) => tweets.tweets.length)

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
        <Name>{`${user?.name} ${user?.lastName}`}</Name>
        <Info>{`${tweetAmount} ${TEXT.TWEETS.toLowerCase()}`}</Info>
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
