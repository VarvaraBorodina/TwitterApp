import { COLORS } from '@/constants/theme'

import { Container } from './styled'

export const Loader = () => {
  return (
    <Container data-testid="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 100 100"
        overflow="visible"
        fill={COLORS.ACCENT}
        stroke="none"
      >
        <defs>
          <circle
            id="loader"
            r="4"
            cx="50"
            cy="50"
            transform="translate(0 -30)"
          />
        </defs>
        <use xlinkHref="#loader" transform="rotate(0 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(45 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(90 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(135 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(180 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(225 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(270 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(315 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
      </svg>
    </Container>
  )
}
