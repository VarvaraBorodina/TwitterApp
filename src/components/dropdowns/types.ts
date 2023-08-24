export type DropdownType<T> = {
  title: string
  changeOption: (name: T, newOption: string) => boolean
  options: string[]
  name: T
}
