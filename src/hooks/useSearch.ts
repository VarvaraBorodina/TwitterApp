import { useState } from 'react'

const useSearch = <T>(getData: (query: string) => Promise<T[]>) => {
  const [items, setItems] = useState<T[]>([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const handleQueryChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setQuery(value)
    setLoading(true)

    getData(value).then((data) => {
      setItems(data)
      setLoading(false)
    })
  }

  const clearQuery = () => {
    setItems([])
    setQuery('')
  }

  return { query, items, loading, handleQueryChange, clearQuery }
}

export default useSearch
