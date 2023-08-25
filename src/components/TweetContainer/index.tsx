import { useState } from 'react'

import { deleteTweet, toggleLike } from '@/api/tweets'
import { Loader } from '@/components/Loader'
import { ALT, ICONS, IMGS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { User } from '@/types'

import {
  Buttons,
  Container,
  Content,
  DateString,
  ImgButton,
  Info,
  Like,
  LikeIcon,
  PostImg,
  Text,
  Title,
  TweetImg,
} from './styled'
import { TweetContainerType } from './types'

const { USER } = ALT
const { USER_IMG } = IMGS
const { LIKE, FILLED_LIKE, DELETE } = ICONS

export const TweetContainer = ({ tweet, afterDelete }: TweetContainerType) => {
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
      <TweetImg src={USER_IMG} alt={USER} />
      <Content>
        <Info>
          <Title>{userName}</Title>
          <DateString>{new Date(date).toDateString()}</DateString>
        </Info>
        <Text>{content}</Text>
        {imgUrl && <PostImg src={imgUrl} alt={USER} onLoad={handleLoaded} />}
        {imgLoading && <Loader />}
        <Buttons>
          <ImgButton onClick={onLike}>
            <LikeIcon $isLiked={isLiked} data-cy="like" data-testid="like">
              {isLiked ? FILLED_LIKE : LIKE}
              <Like $isLiked={isLiked}>{likeAmount}</Like>
            </LikeIcon>
          </ImgButton>
          {tweetUser === user.id && (
            <ImgButton onClick={onDelete} data-cy="delete" data-testid="delete">
              {DELETE}
            </ImgButton>
          )}
        </Buttons>
      </Content>
    </Container>
  )
}
