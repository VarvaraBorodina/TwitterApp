import { useState } from 'react'

import { deleteTweet, toggleLike } from '@/api/tweets'
import Loader from '@/components/Loader'
import { ALT, ICONS, IMGS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
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
  LikeIcon,
  PostImg,
  Text,
  Title,
} from './styled'
import { TweetContainerType } from './types'

const TweetContainer = ({ tweet, afterDelete }: TweetContainerType) => {
  const {
    userName,
    date,
    imgUrl,
    usersLiked,
    user: tweetUser,
    id,
    content,
  } = tweet

  const user = useTypedSelector(({ user }) => user.user) as User
  const dispatch = useTypedDispatch()
  const [isLiked, setIsLiked] = useState(usersLiked.includes(user.id))
  const [likeAmount, setLikeAmount] = useState(usersLiked.length)
  const [imgLoading, setImgLoading] = useState(Boolean(imgUrl))

  const onLike = () => {
    setIsLiked((prevState) => !prevState)
    setLikeAmount((prevState) => (isLiked ? prevState - 1 : prevState + 1))
    dispatch(toggleLike(id))
  }
  const onDelete = () => {
    dispatch(deleteTweet({ id, url: imgUrl }))
    if (afterDelete) {
      afterDelete()
    }
  }

  const handleLoaded = () => {
    setImgLoading(false)
  }

  return (
    <Container>
      <Img src={IMGS.USER_IMG} alt={ALT.USER} />
      <Content>
        <Info>
          <Title>{userName}</Title>
          <DateString>{new Date(date).toDateString()}</DateString>
        </Info>
        <Text>{content}</Text>
        {imgUrl && (
          <PostImg src={imgUrl} alt={ALT.USER} onLoad={handleLoaded} />
        )}
        {imgLoading && <Loader />}
        <Buttons>
          <ImgButton onClick={onLike}>
            <LikeIcon $isLiked={isLiked} data-cy="like" data-testid="like">
              {isLiked ? ICONS.filledLike : ICONS.like}
              <Like $isLiked={isLiked}>{likeAmount}</Like>
            </LikeIcon>
          </ImgButton>
          {tweetUser === user.id && (
            <ImgButton onClick={onDelete} data-cy="delete" data-testid="delete">
              {ICONS.delete}
            </ImgButton>
          )}
        </Buttons>
      </Content>
    </Container>
  )
}

export default TweetContainer
