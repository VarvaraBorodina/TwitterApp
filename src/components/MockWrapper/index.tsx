import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  BORDER_RADIUS,
  COLOR_THEMES,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  FONTS,
  OPACITIES,
  SIZES,
  SPACES,
  Z_INDEX,
} from '@/constants/theme'

import { MockWrapperType } from './types'

function MockWrapper({ children }: MockWrapperType) {
  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES.LIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    OPACITIES,
    BORDER_RADIUS,
    SIZES,
    SPACES,
    FONTS,
    Z_INDEX,
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export default MockWrapper
