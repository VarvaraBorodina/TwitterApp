import styled from 'styled-components'

const Ellipse = styled.div<{ $isLeft: boolean }>`
  position: relative;
  width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT}px;
  height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT}px;
  background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.BORDER};
  border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT}px;

  &:before {
    content: '';
    position: absolute;
    width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_CIRCLE}px;
    top: 50%;
    left: ${({ theme: { SPACES } }) => SPACES.XS}px;
    background: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
    transform: translate(${({ $isLeft }) => ($isLeft ? '0%' : '100%')}, -50%);
  }
  cursor: pointer;
`
export { Ellipse }
