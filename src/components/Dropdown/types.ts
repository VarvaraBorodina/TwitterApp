export type DropdownType = {
  title: string
  changeOption: (newTitle: string) => boolean
  options: string[]
}
