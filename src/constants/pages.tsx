/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Bookmarks } from '@/assets/icons/bookmarks.svg'
import { ReactComponent as Explore } from '@/assets/icons/explore.svg'
import { ReactComponent as Feed } from '@/assets/icons/feed.svg'
import { ReactComponent as Lists } from '@/assets/icons/lists.svg'
import { ReactComponent as Messages } from '@/assets/icons/messages.svg'
import { ReactComponent as More } from '@/assets/icons/more.svg'
import { ReactComponent as Notifications } from '@/assets/icons/notification.svg'
import { ReactComponent as Profile } from '@/assets/icons/profile.svg'

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
    icon: <Bookmarks />,
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
