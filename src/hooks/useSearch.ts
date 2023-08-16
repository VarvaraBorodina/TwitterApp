import { useState } from 'react'

const useSearch = <T>(getData: (query: string) => Promise<T[]>) => {
  const [items, setItems] = useState<T[]>([])
  const [query, setQuery] = useState('')

  const handleQueryChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setQuery(value)

    getData(value).then((data) => {
      setItems(data)
    })
  }

  const clearQuery = () => {
    setItems([])
    setQuery('')
  }

  return { query, items, handleQueryChange, clearQuery }
}

export default useSearch
