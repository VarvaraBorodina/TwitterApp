import React from 'react'
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
  Theme,
  Z_INDEX,
} from '@/constants/theme'
import { useTypedSelector } from '@/hooks'

export const GlobalThemProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const colorTheme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })

  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES[colorTheme],
    FONT_SIZE,
    FONT_WEIGHT,
    OPACITIES,
    BORDER_RADIUS,
    SIZES,
    SPACES,
    FONTS,
    Z_INDEX,
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
