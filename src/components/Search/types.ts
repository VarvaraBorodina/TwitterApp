import React from 'react'

import { ToggleShowProps } from '@/types'

import { PreviewType } from '../TweetPreview/types'

interface SearchType<T extends { id: string }> extends ToggleShowProps {
  SearchItem: React.FC<PreviewType<T>>
  getData: (query: string) => Promise<T[]>
  onTweetsChange?: () => Promise<void>
}

export type { SearchType }
