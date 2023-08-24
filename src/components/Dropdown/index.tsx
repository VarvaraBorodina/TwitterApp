import { useState } from 'react'

import { Arrow } from '@/assets/icons/Arrow'

import { Container, Input, Option, OptionContainer, Title } from './styled'
import { DropdownType } from './types'

export const Dropdown = <T,>({
  title,
  changeOption,
  options,
  name,
}: DropdownType<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [option, setOption] = useState<string>(title)

  const handleOnOptionClick = (optionName: string) => () => {
    if (changeOption(name, optionName)) {
      setIsOpen(false)
      setOption(optionName)
    }
  }

  return (
    <Container>
      <Input onClick={() => setIsOpen(true)}>
        <Title readOnly value={option} />
        <Arrow />
      </Input>
      {isOpen && (
        <OptionContainer>
          {options.map((option: string) => (
            <Option key={option} onClick={handleOnOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionContainer>
      )}
    </Container>
  )
}
