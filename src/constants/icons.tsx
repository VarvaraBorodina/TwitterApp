/// <reference types="vite-plugin-svgr/client" />
import Close from '@/assets/icons/Close'
import Delete from '@/assets/icons/Delete'
import File from '@/assets/icons/File'
import FilledLike from '@/assets/icons/FilledLike'
import Like from '@/assets/icons/Like'
import Menu from '@/assets/icons/Menu'
import Search from '@/assets/icons/Search'
import UserImg from '@/assets/icons/UserImg'

const ICONS = {
  userImg: <UserImg />,
  search: <Search />,
  menu: <Menu />,
  close: <Close />,
  file: <File />,
  like: <Like />,
  filledLike: <FilledLike />,
  delete: <Delete />,
}

const IMGS = {
  LOGO: '/img/logo.png',
  USER_IMG: '/img/userImg.png',
  WALLPAPER: '/img/wallpaper.png',
  BACK: '/img/back-twitter.png',
  GOOGLE: '/img/google.png',
}

export { ICONS, IMGS }
