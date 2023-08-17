import { useState } from 'react'
import React from 'react'

import TweetForm from '@/components/forms/TweetForm'
import LeftSideBar from '@/components/LeftSideBar'
import Modal from '@/components/Modal'
import Search from '@/components/Search'
import { ICONS } from '@/constants'

import { Container, Header, LeftMenu, RightMenu } from './styled'
import { LayoutType } from './types'

const Layout = ({ getSearchData, renderSearchItem, children }: LayoutType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState)
  }

  const toggleShowAddModal = () => {
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
    return (
      <Search
        show={showSearch}
        toggle={toggleShowSearch}
        getData={getSearchData}
        SearchItem={renderSearchItem}
      />
    )
  }

  return (
    <Container>
      {showAddModal && (
        <Modal setIsActive={setShowAddModal}>
          <TweetForm handleAddedTweet={() => setShowAddModal(false)} />
        </Modal>
      )}
      <LeftSideBar show={false} showModal={toggleShowAddModal} />
      <div style={{ display: 'block', width: '100%' }}>
        <Header>
          <LeftMenu onClick={toggleShowMenu}>{ICONS.menu}</LeftMenu>
          <RightMenu onClick={toggleShowSearch}>{ICONS.search}</RightMenu>
        </Header>
        {children}
      </div>
      <Search
        show={showSearch}
        toggle={toggleShowSearch}
        getData={getSearchData}
        SearchItem={renderSearchItem}
      />
    </Container>
  )
}

export default React.memo(Layout)
