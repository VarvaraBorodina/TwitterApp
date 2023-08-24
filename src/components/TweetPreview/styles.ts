import styled from 'styled-components'

export const Post = styled.ul`
  margin: 0 auto;
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
`

export const Author = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.XL};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHT_TEXT};
`
