import { useState } from 'react'

import LeftSideBar from '@/components/LeftSideBar'
import Modal from '@/components/Modal'
import Search from '@/components/Search'
import TweetForm from '@/components/TweetForm'
import { ICONS } from '@/constants'

import { Container, Header, Menu } from './styled'
import { LayoutType } from './types'

const Layout = <T extends { id: string }>({
  getSearchData,
  renderSearchItem,
  children,
}: LayoutType<T>) => {
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
      <div>
        <Header>
          <Menu onClick={toggleShowMenu}>{ICONS.menu}</Menu>
          <Menu onClick={toggleShowSearch}>{ICONS.search}</Menu>
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

/*
<TweetError>{error}</TweetError>
        <Tweets tweets={tweets} onTweetsChange={fetchTweets} />
*/

export default Layout
