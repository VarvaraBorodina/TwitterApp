import { ICONS, TEXT } from '@/constants'
import useSearch from '@/hooks/useSearch'

import { Container, ImgButton, Input, InputContainer, Posts } from './styled'
import { SearchType } from './types'

const Search = <T extends { id: string }>(props: SearchType<T>) => {
  const { SearchItem, show, toggle, getData, onTweetsChange } = props
  const { query, items, handleQueryChange } = useSearch<T>(getData)

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
      <Posts>
        {items.map((item) => (
          <SearchItem
            item={item}
            key={item.id}
            onTweetsChange={onTweetsChange}
          />
        ))}
      </Posts>
    </Container>
  )
}

export default Search
