import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const TweetError = styled.p`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONTS } }) => FONTS.S};
`
