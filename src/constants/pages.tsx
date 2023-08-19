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

const PAGES = [
  {
    name: 'Feed',
    icon: <Feed />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Explore',
    icon: <Explore />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Notifications',
    icon: <Notifications />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Messages',
    icon: <Messages />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Bookmarks',
    icon: <Bookmark />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Lists',
    icon: <Lists />,
    url: ROUTES_NAMES.FEED,
  },
  {
    name: 'Profile',
    icon: <Profile />,
    url: ROUTES_NAMES.PROFILE,
  },
  {
    name: 'More',
    icon: <More />,
    url: ROUTES_NAMES.FEED,
  },
]

export default PAGES
