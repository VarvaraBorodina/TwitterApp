/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Close } from '@/assets/icons/close.svg'
import { ReactComponent as File } from '@/assets/icons/file.svg'
import { ReactComponent as Menu } from '@/assets/icons/menu.svg'
import { ReactComponent as Search } from '@/assets/icons/search.svg'
import { ReactComponent as UserImg } from '@/assets/icons/userImg.svg'

const ICONS = {
  userImg: <UserImg />,
  search: <Search />,
  menu: <Menu />,
  close: <Close />,
  file: <File />,
}

export default ICONS
