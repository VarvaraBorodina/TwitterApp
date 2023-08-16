import React, { useEffect, useState } from 'react'

import { getUserTweets } from '@/api/tweets'
import LeftSideBar from '@/components/LeftSideBar'
import Modal from '@/components/Modal'
import Search from '@/components/Search'
import TweetForm from '@/components/TweetForm'
import Tweets from '@/components/Tweets'
import UserInfo from '@/components/UserInfo'
import { Tweet } from '@/types'

import { Container, TweetError } from './styled'

const Profile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const [showAddModal, setShowAddModal] = useState(false)

  const [tweets, setTweets] = useState<Tweet[]>([])
  const [error, setError] = useState('')

  const fetchTweets: () => Promise<void> = async () => {
    try {
      const tweetsResponse: Tweet[] = await getUserTweets()
      setTweets(tweetsResponse)
    } catch (error) {
      setError((error as Error).message)
    }
  }

  useEffect(() => {
    fetchTweets()
  }, [])

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState)
  }

  const toggleShowAddModal = () => {
    fetchTweets()
    setShowAddModal((prevState) => !prevState)
  }

  if (showMenu) {
    return (
      <LeftSideBar
        show={showMenu}
        toggle={toggleShowMenu}
        showModal={toggleShowAddModal}
      />
    )
  }
  if (showSearch) {
    return <Search show={showSearch} toggle={toggleShowSearch} />
  }
  return (
    <Container>
      {showAddModal && (
        <Modal setIsActive={setShowAddModal}>
          <TweetForm handleTweet={toggleShowAddModal} />
        </Modal>
      )}
      <LeftSideBar show={false} showModal={toggleShowAddModal} />
      <div>
        <UserInfo
          toggleShowMenu={toggleShowMenu}
          toggleShowSearch={toggleShowSearch}
          tweetAmount={tweets.length}
        />
        <TweetError>{error}</TweetError>
        <Tweets tweets={tweets} onTweetAdd={fetchTweets} />
      </div>
      <Search show={false} />
    </Container>
  )
}

export default Profile
