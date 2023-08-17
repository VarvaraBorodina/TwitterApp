import React, { useState } from 'react'

import { ReactComponent as Arrow } from '@/assets/icons/arrow.svg'

import { Container, Input, Option, OptionContainer, Title } from './styled'
import { DropdownType } from './types'

const Dropdown: React.FC<DropdownType> = ({ title, changeOption, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [option, setOption] = useState<string>(title)

  const handleOnOptionClick = (optionName: string) => () => {
    if (changeOption(optionName)) {
      setIsOpen(false)
      setOption(optionName)
    }
  }

  return (
    <Container>
      <Input onClick={() => setIsOpen(true)}>
        <Title>{option}</Title>
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

export default Dropdown
