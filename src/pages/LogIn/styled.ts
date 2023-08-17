import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${({ theme: { COLORS } }) => COLORS.HOME_PAGE};
`

export { Container }
