import { useState } from 'react'

import { useTypedSelector } from '@/hooks'
import { Tweet } from '@/types'

import Modal from '../Modal'
import TweetContainer from '../TweetContainer'
import { Author, Post } from './styles'
import { PreviewType } from './types'

const TweetPreview = ({ item, clearQuery }: PreviewType<Tweet>) => {
  const [isTweetOpen, setIsTweetOpen] = useState<boolean>(false)
  const tweet =
    useTypedSelector(({ tweets }) =>
      tweets.tweets.find(({ id: tweetId }) => tweetId === item.id)
    ) ?? item

  const handleOnTweet = () => {
    setIsTweetOpen(true)
  }

  const handleDelete = () => {
    setIsTweetOpen(false)
    clearQuery()
  }

  if (!tweet) {
    if (isTweetOpen) {
      setIsTweetOpen(false)
    }
    return null
  }

  const { userName, content } = tweet

  return (
    <>
      {isTweetOpen && (
        <Modal setIsActive={setIsTweetOpen}>
          <TweetContainer tweet={tweet} afterDelete={handleDelete} />
        </Modal>
      )}
      <Post onClick={handleOnTweet}>
        <Author>{userName}</Author>
        {content}
      </Post>
    </>
  )
}
export default TweetPreview
