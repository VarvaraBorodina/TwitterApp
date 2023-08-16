import userImg from '/img/userImg.png'
import { deleteTweet, toggleLike } from '@/api/tweets'
import { ALT, ICONS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
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

const TweetContainer = ({
  tweet,
  afterDelete,
}: {
  tweet: Tweet
  afterDelete?: () => void
}) => {
  const user = useTypedSelector(({ user }) => user.user) as User
  const dispatch = useTypedDispatch()

  const { userName, date, imgUrl, usersLiked, user: tweetUser, id } = tweet
  const onLike = () => {
    dispatch(toggleLike(id))
  }
  const onDelete = () => {
    dispatch(deleteTweet({ id, url: imgUrl }))
    if (afterDelete) {
      afterDelete()
    }
  }

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
