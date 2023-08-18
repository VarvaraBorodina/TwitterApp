import { useCallback, useState } from 'react'
import React from 'react'

import TweetForm from '@/components/forms/TweetForm'
import LeftSideBar from '@/components/LeftSideBar'
import Modal from '@/components/Modal'
import Search from '@/components/Search'
import { ICONS } from '@/constants'

import { Container, Content, Header, LeftMenu, RightMenu } from './styled'
import { LayoutType } from './types'

const Layout = (props: LayoutType) => {
  const { getSearchData, renderSearchItem, children, searchPlaceholder } = props
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const toggleShowMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState)
  }, [])
  const toggleShowSearch = useCallback(() => {
    setShowSearch((prevState) => !prevState)
  }, [])
  const toggleShowAddModal = useCallback(() => {
    setShowAddModal((prevState) => !prevState)
  }, [])

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
        placeholder={searchPlaceholder}
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
      <Content>
        <Header>
          <LeftMenu onClick={toggleShowMenu}>{ICONS.menu}</LeftMenu>
          <RightMenu onClick={toggleShowSearch}>{ICONS.search}</RightMenu>
        </Header>
        {children}
      </Content>
      <Search
        show={showSearch}
        toggle={toggleShowSearch}
        getData={getSearchData}
        SearchItem={renderSearchItem}
        placeholder={searchPlaceholder}
      />
    </Container>
  )
}

export default React.memo(Layout)
