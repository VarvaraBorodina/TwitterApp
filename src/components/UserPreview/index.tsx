import { User } from '@/types'

import { PreviewType } from '../TweetPreview/types'
import { Block, Name } from './styled'

const UserPreview = ({ item }: PreviewType<User>) => {
  const { name, lastName } = item

  return (
    <>
      <Block>
        <Name>{`${name} ${lastName}`}</Name>
      </Block>
    </>
  )
}
export default UserPreview
