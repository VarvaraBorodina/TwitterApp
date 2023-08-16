type PreviewType<T extends { id: string }> = {
  item: T
  clearQuery: () => void
}

export type { PreviewType }
