import { keyframes } from "styled-components"

export const fade_in = keyframes`
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const slipUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 4rem);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`

export const image = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 1%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const snippet = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`
