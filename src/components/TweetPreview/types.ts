type PreviewType<T> = {
  item: T
  onTweetsChange?: () => Promise<void>
}

export type { PreviewType }
