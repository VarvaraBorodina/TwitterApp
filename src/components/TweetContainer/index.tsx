import userImg from '/img/userImg.png'
import { auth } from '@/api'
import { ALT, ICONS } from '@/constants'
import { useTypedSelector } from '@/hooks'
import { Tweet, User } from '@/types'

import {
  Buttons,
  Container,
  Content,
  DateString,
  Img,
  ImgButton,
  Info,
  Like,
  PostImg,
  Text,
  Title,
} from './styled'
const TweetContainer = ({ tweet }: { tweet: Tweet }) => {
  const user = useTypedSelector(({ user }) => user.user) as User

  return (
    <Container>
      <Img src={userImg} alt={ALT.USER} />
      <Content>
        <Info>
          <Title>{tweet.userName}</Title>
          <DateString>{new Date(tweet.date).toDateString()}</DateString>
        </Info>
        <Text>{tweet.content}</Text>
        {tweet.imgUrl && <PostImg src={tweet.imgUrl} alt={ALT.USER} />}
        <Buttons>
          <ImgButton>
            {ICONS.like}
            <Like
              $isLiked={tweet.usersLiked.includes(auth.currentUser?.uid ?? '')}
            >
              {tweet.usersLiked.length}
            </Like>
          </ImgButton>
          {tweet.user === user.id && <ImgButton>{ICONS.delete}</ImgButton>}
        </Buttons>
      </Content>
    </Container>
  )
}

export default TweetContainer
