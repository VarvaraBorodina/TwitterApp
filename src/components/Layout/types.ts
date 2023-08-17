import { PreviewType } from '@/components/TweetPreview/types'
import { Searchable } from '@/types'

type LayoutType = {
  getSearchData: (query: string) => Promise<Searchable[]>
  renderSearchItem: (props: PreviewType<Searchable>) => JSX.Element
  children: JSX.Element
}

export type { LayoutType }
