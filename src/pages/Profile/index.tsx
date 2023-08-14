import React, { useState } from 'react'

import LeftSideBar from '@/components/LeftSideBar'
import Search from '@/components/Search'
import Tweets from '@/components/Tweets'
import UserInfo from '@/components/UserInfo'

import { Container } from './styled'

const Profile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState)
  }

  if (showMenu) {
    return <LeftSideBar show={showMenu} toggle={toggleShowMenu} />
  }
  if (showSearch) {
    return <Search show={showSearch} toggle={toggleShowSearch} />
  }
  return (
    <Container>
      <LeftSideBar show={false} />
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
