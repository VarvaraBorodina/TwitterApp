import { createGlobalStyle } from 'styled-components'

import RobotoBlack from '@/assets/fonts/Roboto-Black.ttf'
import RobotoMedium from '@/assets/fonts/Roboto-Medium.ttf'
import RobotoRegular from '@/assets/fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
@font-face {
  font-family: 'RobotoBlack';
  src: url(${RobotoBlack}) format('truetype');
}
@font-face {
  font-family: 'RobotoMedium';
  src: url(${RobotoMedium}) format('truetype');
}
@font-face {
  font-family: 'RobotoRegular';
  src: url(${RobotoRegular}) format('truetype');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 24px;
  }
body {
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
}
`
