import styled from 'styled-components'

const Post = styled.ul`
  width: 100%;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
`

const Author = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
`

export { Author, Post }
