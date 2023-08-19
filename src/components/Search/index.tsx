import { memo } from 'react'

import { ICONS, TEXT } from '@/constants'
import useSearch from '@/hooks/useSearch'

import {
  Container,
  ImgButton,
  Input,
  InputContainer,
  Message,
  Posts,
} from './styled'
import { SearchType } from './types'

const Search = <T extends { id: string }>(props: SearchType<T>) => {
  const { SearchItem, show, toggle, getData, placeholder } = props
  const { query, items, handleQueryChange, clearQuery, loading } =
    useSearch<T>(getData)

  const handleClose = () => {
    if (toggle) {
      toggle()
    }
  }

  return (
    <Container $show={show}>
      <ImgButton onClick={handleClose}>{ICONS.close}</ImgButton>
      <InputContainer>
        {ICONS.search}
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
      </InputContainer>
      {loading ? (
        <Message>{TEXT.LOADING}</Message>
      ) : items.length === 0 && query !== '' ? (
        <Message>{TEXT.NOT_FOUND}</Message>
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
