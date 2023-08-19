import { Theme } from '@/constants/theme'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { toggleTheme } from '@/store/slices/themeSlice'

import { Ellipse } from './styled'

const ToggleTheme = () => {
  const dispatch = useTypedDispatch()
  const theme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })
  return (
    <Ellipse
      onClick={() => dispatch(toggleTheme())}
      $isLeft={theme === 'LIGHT'}
      data-cy="toggle"
      data-testid="toggle"
    />
  )
}

export default ToggleTheme
