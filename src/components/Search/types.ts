import React from 'react'

import { PreviewType } from '@/components/TweetPreview/types'
import { ToggleShowProps } from '@/types'

export interface SearchType<Searchable> extends ToggleShowProps {
  SearchItem?: React.FC<PreviewType<Searchable>>
  getData: (query: string) => Promise<Searchable[]>
  placeholder: string
}
