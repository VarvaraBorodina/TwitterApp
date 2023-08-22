import { useState } from 'react'

import EditForm from '@/components/forms/EditForm'
import Modal from '@/components/Modal'
import { ALT, ICONS, IMGS, TEXT } from '@/constants'
import { useTypedSelector } from '@/hooks'
import { tweetsAmountSelector } from '@/store/slices/tweetsSlice'
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

const { TWEETS, AGE, EDIT } = TEXT
const { COVER } = ALT
const { USER_IMG } = ICONS
const { WALLPAPER } = IMGS

const UserInfo = () => {
  const user = useTypedSelector(({ user }) => user.user) as User
  const [isModal, setIsModal] = useState<boolean>(false)
  const tweetAmount = useTypedSelector(tweetsAmountSelector(user?.id))

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
        <Info>{`${tweetAmount} ${TWEETS.toLowerCase()}`}</Info>
      </Header>
      <Img src={WALLPAPER} alt={COVER} />
      <Profile>
        <Button onClick={handleEdit}>{EDIT}</Button>
      </Profile>
      <UserData>
        {USER_IMG}
        <Name>{`${user?.name} ${user?.lastName}`}</Name>
        <Info>{`${user?.telegram ? `@${user?.telegram}` : ''} ${
          user?.dateOfBirth
            ? ` ${getAge(new Date(user.dateOfBirth))} ${AGE}`
            : ''
        }`}</Info>
      </UserData>
    </Container>
  )
}

export default UserInfo
