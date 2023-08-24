import { Container, Content } from './styled'
import { ModalTypes } from './types'

export const Modal = ({ setIsActive, children }: ModalTypes) => {
  if (!children) {
    setIsActive(false)
  }

  const handleOutClick = () => {
    setIsActive(false)
  }

  const handleOnModalClick = (event: React.MouseEvent<HTMLElement>) =>
    event.stopPropagation()

  return (
    <Container onClick={handleOutClick}>
      <Content onClick={handleOnModalClick}>{children}</Content>
    </Container>
  )
}
