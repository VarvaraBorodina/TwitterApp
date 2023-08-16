import { useState } from 'react'

import { deleteTweet, toggleLike } from '@/api/tweets'
import { Tweet } from '@/types'

import Modal from '../Modal'
import TweetContainer from '../TweetContainer'
import { Author, Post } from './styles'
import { PreviewType } from './types'

const TweetPreview = ({ item, onTweetsChange }: PreviewType<Tweet>) => {
  const { userName, content } = item
  const [isTweetOpen, setIsTweetOpen] = useState<boolean>(false)
  const [tweet, setTweet] = useState<Tweet | null>(item)

  const handleOnTweet = () => {
    if (onTweetsChange) {
      onTweetsChange()
    }
    setIsTweetOpen(true)
  }

  const handleDelete = () => {
    deleteTweet(item.id, item.imgUrl).then(() => {
      if (onTweetsChange) {
        onTweetsChange()
      }
      console.log('deleted')
      setTweet(null)
      setIsTweetOpen(false)
    })
  }

  const handleToggleLike = () => {
    toggleLike(item.id).then((updatedTweet) => {
      setTweet(updatedTweet)
      if (onTweetsChange) {
        onTweetsChange()
      }
    })
  }

  if (!tweet) {
    return null
  }

  return (
    <>
      {isTweetOpen && (
        <Modal setIsActive={setIsTweetOpen}>
          <TweetContainer
            tweet={tweet}
            onDelete={handleDelete}
            onLike={handleToggleLike}
          />
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
