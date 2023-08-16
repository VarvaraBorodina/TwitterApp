import styled from 'styled-components'

const Block = styled.ul`
  width: 100%;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
`

const Name = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.XL};
`

export { Block, Name }
