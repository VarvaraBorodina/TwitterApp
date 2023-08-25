/// <reference types="vite-plugin-svgr/client" />

import { Bookmarks } from '@/assets/icons/Bookmark'
import { Explore } from '@/assets/icons/Explore'
import { Feed } from '@/assets/icons/Feed'
import { Lists } from '@/assets/icons/Lists'
import { Messages } from '@/assets/icons/Messages'
import { More } from '@/assets/icons/More'
import { Notification } from '@/assets/icons/Notification'
import { Profile } from '@/assets/icons/Profile'

import { ROUTES_NAMES } from './routesNames'

const { FEED, PROFILE, OTHER } = ROUTES_NAMES

export const PAGES = [
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
    icon: <Notification />,
    url: OTHER,
  },
  {
    name: 'Messages',
    icon: <Messages />,
    url: OTHER,
  },
  {
    name: 'Bookmarks',
    icon: <Bookmarks />,
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
