import userImg from '/img/userImg.png'
import { ALT, ICONS } from '@/constants'
import { useTypedSelector } from '@/hooks'
import { User } from '@/types'

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
import { TweetContainerType } from './types'
const TweetContainer = ({ tweet, onDelete, onLike }: TweetContainerType) => {
  const user = useTypedSelector(({ user }) => user.user) as User

  const { userName, date, imgUrl, usersLiked, user: tweetUser } = tweet

  return (
    <Container>
      <Img src={userImg} alt={ALT.USER} />
      <Content>
        <Info>
          <Title>{userName}</Title>
          <DateString>{new Date(date).toDateString()}</DateString>
        </Info>
        <Text>{tweet.content}</Text>
        {imgUrl && <PostImg src={imgUrl} alt={ALT.USER} />}
        <Buttons>
          <ImgButton onClick={onLike}>
            {usersLiked.includes(user.id) ? ICONS.filledLike : ICONS.like}
            <Like $isLiked={usersLiked.includes(user.id)}>
              {tweet.usersLiked.length}
            </Like>
          </ImgButton>
          {tweetUser === user.id && (
            <ImgButton onClick={onDelete}>{ICONS.delete}</ImgButton>
          )}
        </Buttons>
      </Content>
    </Container>
  )
}

export default TweetContainer
