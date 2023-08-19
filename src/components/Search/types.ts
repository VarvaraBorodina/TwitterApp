import React from 'react'

import { PreviewType } from '@/components/TweetPreview/types'
import { ToggleShowProps } from '@/types'

interface SearchType<T extends { id: string }> extends ToggleShowProps {
  SearchItem?: React.FC<PreviewType<T>>
  getData: (query: string) => Promise<T[]>
  placeholder: string
}

export type { SearchType }
