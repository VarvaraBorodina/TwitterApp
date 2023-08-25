import { ReactNode } from 'react'

export type ModalTypes = {
  setIsActive: (isActive: boolean) => void
  children: ReactNode
}
