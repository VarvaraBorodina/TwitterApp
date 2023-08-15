import React, { useState } from 'react'

import LeftSideBar from '@/components/LeftSideBar'
import Modal from '@/components/Modal'
import Search from '@/components/Search'
import TweetForm from '@/components/TweetForm'
import Tweets from '@/components/Tweets'
import UserInfo from '@/components/UserInfo'

import { Container } from './styled'

const Profile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const [showModal, setShowModal] = useState(false)

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState)
  }

  const toggleShowModal = () => {
    setShowModal((prevState) => !prevState)
  }

  if (showMenu) {
    return (
      <LeftSideBar
        show={showMenu}
        toggle={toggleShowMenu}
        showModal={toggleShowModal}
      />
    )
  }
  if (showSearch) {
    return <Search show={showSearch} toggle={toggleShowSearch} />
  }
  return (
    <Container>
      {showModal && (
        <Modal setIsActive={setShowModal}>
          <TweetForm handleTweet={toggleShowModal} />
        </Modal>
      )}
      <LeftSideBar show={false} showModal={toggleShowModal} />
      <div>
        <UserInfo
          toggleShowMenu={toggleShowMenu}
          toggleShowSearch={toggleShowSearch}
        />
        <Tweets />
      </div>
      <Search show={false} />
    </Container>
  )
}

export default Profile
