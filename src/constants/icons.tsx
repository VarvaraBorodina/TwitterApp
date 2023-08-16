/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Close } from '@/assets/icons/close.svg'
import { ReactComponent as Delete } from '@/assets/icons/delete.svg'
import { ReactComponent as File } from '@/assets/icons/file.svg'
import { ReactComponent as FilledLike } from '@/assets/icons/filledLike.svg'
import { ReactComponent as Like } from '@/assets/icons/like.svg'
import { ReactComponent as Menu } from '@/assets/icons/menu.svg'
import { ReactComponent as Search } from '@/assets/icons/search.svg'
import { ReactComponent as UserImg } from '@/assets/icons/userImg.svg'

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

export default ICONS
