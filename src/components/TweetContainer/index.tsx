import userImg from '/img/userImg.png'
import { deleteTweet, toggleLike } from '@/api/tweets'
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
const TweetContainer = ({
  tweet,
  onTweetsChange,
}: {
  tweet: Tweet
  onTweetsChange: () => void
}) => {
  const user = useTypedSelector(({ user }) => user.user) as User

  const handleDelete = (tweetId: string, url: string | undefined) => () => {
    deleteTweet(tweetId, url).then(() => {
      onTweetsChange()
    })
  }

  const handleToggleLike = (tweetId: string) => () => {
    toggleLike(tweetId).then(() => {
      onTweetsChange()
    })
  }

  const { userName, date, imgUrl, id, usersLiked, user: tweetUser } = tweet

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
          <ImgButton onClick={handleToggleLike(id)}>
            {usersLiked.includes(user.id) ? ICONS.filledLike : ICONS.like}
            <Like $isLiked={usersLiked.includes(user.id)}>
              {tweet.usersLiked.length}
            </Like>
          </ImgButton>
          {tweetUser === user.id && (
            <ImgButton onClick={handleDelete(id, imgUrl)}>
              {ICONS.delete}
            </ImgButton>
          )}
        </Buttons>
      </Content>
    </Container>
  )
}

export default TweetContainer
