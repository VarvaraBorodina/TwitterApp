import { ICONS, TEXT } from '@/constants'
import { ToggleShowProps } from '@/types'

import {
  Author,
  Container,
  ImgButton,
  Input,
  InputContainer,
  Post,
  Posts,
} from './styled'

const Search = ({ toggle, show }: ToggleShowProps) => {
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
        <Input placeholder={TEXT.SEARCH_TWEET} />
      </InputContainer>
      <Posts>
        <Post>
          <Author>Varvara Bor</Author>
          Twitterdagi ayol erkak qarama qarshilig inglardan ozinglar zerikm
          adinglarmi?
        </Post>

        <Post>
          <Author>Daria Bor</Author>
          Rama qarshili gingla rdan ozinglar zerikmad inglarmi?
        </Post>
      </Posts>
    </Container>
  )
}

export default Search
