import { useDeferredValue, useEffect, useState } from 'react'

export const useSearch = <T>(getData: (query: string) => Promise<T[]>) => {
  const [items, setItems] = useState<T[]>([])

  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (deferredQuery) {
      setLoading(true)

      getData(deferredQuery).then((data) => {
        setItems(data)
        setLoading(false)
      })
    } else {
      setItems([])
    }
  }, [deferredQuery])

  const handleQueryChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setQuery(value)
  }

  const clearQuery = () => {
    setItems([])
    setQuery('')
  }

  return { query, items, loading, handleQueryChange, clearQuery }
}
