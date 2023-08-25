import { PreviewType } from '@/components/TweetPreview/types'
import { Searchable, User } from '@/types'

import { Block, Name } from './styled'

export const UserPreview = ({ item }: PreviewType<Searchable>) => {
  const { name, lastName } = item as User

  return (
    <>
      <Block>
        <Name>{`${name} ${lastName}`}</Name>
      </Block>
    </>
  )
}
