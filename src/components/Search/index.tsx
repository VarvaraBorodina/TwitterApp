import { memo } from 'react'

import { ICONS, TEXT } from '@/constants'
import { useSearch } from '@/hooks/useSearch'
import { ImgButton } from '@/styles/common'
import { Searchable } from '@/types'

import { Container, Input, InputContainer, Message, Posts } from './styled'
import { SearchType } from './types'

const { CLOSE, SEARCH } = ICONS
const { LOADING, NOT_FOUND } = TEXT

export const Search = memo((props: SearchType<Searchable>) => {
  const { SearchItem, show, toggle, getData, placeholder } = props
  const { query, items, handleQueryChange, clearQuery, loading } =
    useSearch<Searchable>(getData)

  const handleClose = () => {
    if (toggle) {
      toggle()
    }
  }

  return (
    <Container show={show ? 'show' : ''}>
      <ImgButton onClick={handleClose}>{CLOSE}</ImgButton>
      <InputContainer>
        {SEARCH}
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
      </InputContainer>
      {loading && <Message>{LOADING}</Message>}
      {items.length === 0 && !loading && query !== '' && (
        <Message>{NOT_FOUND}</Message>
      )}
      <Posts>
        {items.map((item) =>
          SearchItem ? (
            <SearchItem item={item} key={item.id} clearQuery={clearQuery} />
          ) : (
            ''
          )
        )}
      </Posts>
    </Container>
  )
})
