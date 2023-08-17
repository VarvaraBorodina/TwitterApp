import styled from 'styled-components'

const Message = styled.p`
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  text-align: center;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export { Message }
