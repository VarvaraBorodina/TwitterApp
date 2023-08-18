import { PreviewType } from '@/components/TweetPreview/types'
import { Searchable } from '@/types'

type LayoutType = {
  getSearchData: (query: string) => Promise<Searchable[]>
  renderSearchItem: (props: PreviewType<Searchable>) => JSX.Element
  children: JSX.Element
  searchPlaceholder: string
}

export type { LayoutType }
