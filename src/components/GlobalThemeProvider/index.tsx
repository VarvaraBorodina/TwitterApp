import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  COLOR_THEMES,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  FONTS,
  LINE_HEIGHT,
  SIZES,
  SPACES,
  Z_INDEX,
} from '@/constants/theme'

const GlobalThemProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES['LIGHT'],
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    SIZES,
    SPACES,
    FONTS,
    Z_INDEX,
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemProvider
