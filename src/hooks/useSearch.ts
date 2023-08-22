import { useDeferredValue, useEffect, useState } from 'react'

const useSearch = <T>(getData: (query: string) => Promise<T[]>) => {
  const [items, setItems] = useState<T[]>([])

  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getData(deferredQuery).then((data) => {
      setItems(data)
      setLoading(false)
    })
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

export default useSearch
