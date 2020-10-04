import { css } from "styled-components"
import * as keys from "../components/keys"

const fade = "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
const run = 250

const title = []
title[0] = [run, 250]
title[1] = [run, title[0][0] * 0.89 + title[0][1]]
title[2] = [run, title[1][0] * 0.34 + title[1][1]]
title[3] = [run, title[2][0] * 0.21 + title[2][1]]
title[4] = [run, title[3][0] * 0.13 + title[3][1]]
title[5] = [run, title[4][0] * 0.08 + title[4][1]]
title[6] = [run, title[5][0] * 0.05 + title[5][1]]
title[7] = [run, title[6][0] * 0.03 + title[6][1]]

export function animateStoryTitle(el) {
  // let styles = ""

  // for (let i = 0; i < 8; i += 1) {
  //   styles += `
  //      &:nth-child(${i}) ${StoryTitle} {
  //        animation: ${title[i].join("ms ") + "ms"} ${slipUp} ${fade} both;
  //      }
  //    `
  // }

  return css`
    &:nth-child(1) ${el} {
      animation: ${title[0].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(2) ${el} {
      animation: ${title[1].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(3) ${el} {
      animation: ${title[2].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(4) ${el} {
      animation: ${title[3].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(5) ${el} {
      animation: ${title[4].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(6) ${el} {
      animation: ${title[5].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(7) ${el} {
      animation: ${title[6].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
    &:nth-child(8) ${el} {
      animation: ${title[7].join("ms ") + "ms"} ${keys.slipUp} ${fade} backwards;
    }
  `
}

const dash = []
dash[0] = [run, 750]
dash[1] = [run, dash[0][0] * 0.89 + dash[0][1]]
dash[2] = [run, dash[1][0] * 0.34 + dash[1][1]]
dash[3] = [run, dash[2][0] * 0.21 + dash[2][1]]
dash[4] = [run, dash[3][0] * 0.13 + dash[3][1]]
dash[5] = [run, dash[4][0] * 0.08 + dash[4][1]]
dash[6] = [run, dash[5][0] * 0.05 + dash[5][1]]
dash[7] = [run, dash[6][0] * 0.03 + dash[6][1]]

export function animateStoryDash(el) {
  return css`
    &:nth-child(1) ${el} {
      animation: ${dash[0].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(2) ${el} {
      animation: ${dash[1].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(3) ${el} {
      animation: ${dash[2].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(4) ${el} {
      animation: ${dash[3].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(5) ${el} {
      animation: ${dash[4].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(6) ${el} {
      animation: ${dash[5].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(7) ${el} {
      animation: ${dash[6].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
    &:nth-child(8) ${el} {
      animation: ${dash[7].join("ms ") + "ms"} ${keys.fade_in} ${fade} backwards;
    }
  `
}
