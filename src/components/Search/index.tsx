import { memo } from 'react'

import { ICONS, TEXT } from '@/constants'
import useSearch from '@/hooks/useSearch'
import { Searchable } from '@/types'

import {
  Container,
  ImgButton,
  Input,
  InputContainer,
  Message,
  Posts,
} from './styled'
import { SearchType } from './types'

const { CLOSE, SEARCH } = ICONS
const { LOADING, NOT_FOUND } = TEXT

const Search = (props: SearchType<Searchable>) => {
  const { SearchItem, show, toggle, getData, placeholder } = props
  const { query, items, handleQueryChange, clearQuery, loading } =
    useSearch<Searchable>(getData)

  const handleClose = () => {
    if (toggle) {
      toggle()
    }
  }

  return (
    <Container $show={show}>
      <ImgButton onClick={handleClose}>{CLOSE}</ImgButton>
      <InputContainer>
        {SEARCH}
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
      </InputContainer>
      {loading ? (
        <Message>{LOADING}</Message>
      ) : items.length === 0 && query !== '' ? (
        <Message>{NOT_FOUND}</Message>
      ) : (
        <Posts>
          {items.map((item) =>
            SearchItem ? (
              <SearchItem item={item} key={item.id} clearQuery={clearQuery} />
            ) : (
              ''
            )
          )}
        </Posts>
      )}
    </Container>
  )
}

export default memo(Search)
