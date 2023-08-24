import styled from 'styled-components'

export const Block = styled.ul`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
  cursor: pointer;
`

export const Name = styled.p`
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.M};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
