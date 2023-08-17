import { useState } from 'react'

import Modal from '@/components/Modal'
import TweetContainer from '@/components/TweetContainer'
import { useTypedSelector } from '@/hooks'
import { Searchable, Tweet } from '@/types'

import { Author, Post } from './styles'
import { PreviewType } from './types'

const TweetPreview = ({ item, clearQuery }: PreviewType<Searchable>) => {
  const [isTweetOpen, setIsTweetOpen] = useState<boolean>(false)
  const tweet =
    useTypedSelector(({ tweets }) =>
      tweets.tweets.find(({ id: tweetId }) => tweetId === item.id)
    ) ?? (item as Tweet)

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
    return <></>
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
