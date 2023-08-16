import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.S};
`

export { Container, TweetError }
