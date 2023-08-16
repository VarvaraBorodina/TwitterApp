import { Container, Content } from './styled'
import { ModalTypes } from './types'

const Modal = ({ setIsActive, children }: ModalTypes) => {
  if (!children) {
    setIsActive(false)
  }

  const handleOutClick = () => {
    setIsActive(false)
  }
  return (
    <Container onClick={handleOutClick}>
      <Content
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          event.stopPropagation()
        }
      >
        {children}
      </Content>
    </Container>
  )
}

export default Modal
