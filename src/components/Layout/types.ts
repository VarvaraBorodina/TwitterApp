import { PreviewType } from '@/components/TweetPreview/types'

type LayoutType<T extends { id: string }> = {
  getSearchData: (query: string) => Promise<T[]>
  renderSearchItem: React.FC<PreviewType<T>>
  children: JSX.Element
}

export type { LayoutType }
