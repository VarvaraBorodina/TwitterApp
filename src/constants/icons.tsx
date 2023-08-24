/// <reference types="vite-plugin-svgr/client" />
import { Close } from '@/assets/icons/Close'
import { Delete } from '@/assets/icons/Delete'
import { File } from '@/assets/icons/File'
import { FilledLike } from '@/assets/icons/FilledLike'
import { Like } from '@/assets/icons/Like'
import { Menu } from '@/assets/icons/Menu'
import { Search } from '@/assets/icons/Search'
import { UserImg } from '@/assets/icons/UserImg'

export const ICONS = {
  USER_IMG: <UserImg />,
  SEARCH: <Search />,
  MENU: <Menu />,
  CLOSE: <Close />,
  FILE: <File />,
  LIKE: <Like />,
  FILLED_LIKE: <FilledLike />,
  DELETE: <Delete />,
}

export const IMGS = {
  LOGO: '/img/logo.png',
  USER_IMG: '/img/userImg.png',
  WALLPAPER: '/img/wallpaper.png',
  BACK: '/img/back-twitter.png',
  GOOGLE: '/img/google.png',
}
