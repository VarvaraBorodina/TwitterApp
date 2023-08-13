import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
`

export { Container }
