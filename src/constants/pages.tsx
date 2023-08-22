/// <reference types="vite-plugin-svgr/client" />

import Bookmark from '@/assets/icons/Bookmark'
import Explore from '@/assets/icons/Explore'
import Feed from '@/assets/icons/Feed'
import Lists from '@/assets/icons/Lists'
import Messages from '@/assets/icons/Messages'
import More from '@/assets/icons/More'
import Notifications from '@/assets/icons/Notification'
import Profile from '@/assets/icons/Profile'

import ROUTES_NAMES from './routesNames'

const { FEED, PROFILE, OTHER } = ROUTES_NAMES

const PAGES = [
  {
    name: 'Feed',
    icon: <Feed />,
    url: FEED,
  },
  {
    name: 'Explore',
    icon: <Explore />,
    url: OTHER,
  },
  {
    name: 'Notifications',
    icon: <Notifications />,
    url: OTHER,
  },
  {
    name: 'Messages',
    icon: <Messages />,
    url: OTHER,
  },
  {
    name: 'Bookmarks',
    icon: <Bookmark />,
    url: OTHER,
  },
  {
    name: 'Lists',
    icon: <Lists />,
    url: OTHER,
  },
  {
    name: 'Profile',
    icon: <Profile />,
    url: PROFILE,
  },
  {
    name: 'More',
    icon: <More />,
    url: OTHER,
  },
]

export default PAGES
