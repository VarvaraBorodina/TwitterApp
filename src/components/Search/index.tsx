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
  const { SearchItem, show, toggle, getData } = props
  const { query, items, handleQueryChange, clearQuery } = useSearch<T>(getData)

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
          placeholder={TEXT.SEARCH_TWEET}
          value={query}
          onChange={handleQueryChange}
        />
      </InputContainer>
      {items.length === 0 && query !== '' ? (
        <Message>Nothing found</Message>
      ) : (
        <Posts>
          {items.map((item) => (
            <SearchItem item={item} key={item.id} clearQuery={clearQuery} />
          ))}
        </Posts>
      )}
    </Container>
  )
}

export default Search
