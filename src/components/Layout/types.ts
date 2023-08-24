import { PreviewType } from '@/components/TweetPreview/types'
import { Searchable } from '@/types'

export type LayoutType = {
  getSearchData: (query: string) => Promise<Searchable[]>
  renderSearchItem: (props: PreviewType<Searchable>) => JSX.Element | null
  children: JSX.Element
  searchPlaceholder: string
}
