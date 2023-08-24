import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
  font-family: 'Roboto';
}
`
