import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { Arrow } from '@/assets/icons/Arrow'
import { DropdownType } from '@/components/Dropdown/types'

import { Container, Input, Option, OptionContainer, Title } from './styled'

export const PortalDropdown = <T,>({
  title,
  changeOption,
  options,
  name,
}: DropdownType<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [option, setOption] = useState<string>(title)
  const container = useRef<HTMLDivElement>(null)

  const handleOnOptionClick = (optionName: string) => () => {
    if (changeOption(name, optionName)) {
      setIsOpen(false)
      setOption(optionName)
    }
  }

  const portal = container.current as Element

  return (
    <Container ref={container}>
      <Input onClick={() => setIsOpen(true)}>
        <Title readOnly value={option} />
        <Arrow />
      </Input>
      {isOpen &&
        createPortal(
          <OptionContainer>
            {options.map((option: string) => (
              <Option key={option} onClick={handleOnOptionClick(option)}>
                {option}
              </Option>
            ))}
          </OptionContainer>,
          portal
        )}
    </Container>
  )
}
