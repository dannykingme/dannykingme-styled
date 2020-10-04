import React from "react"
import { ThemeProvider } from "styled-components"

const base = 4
const unit = "rem"

const theme = {
  color: {},
  font: {},
  time: {},
  size: {},
  border: {}
}

theme.color = {
  black: "#000000",
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",
  white: "#FFFFFF",
  red: "#FD5750",
  orange: "#FD8650",
  yellow: "#FDE550",
  green: "#97FC4F",
  cyan: "#6CFCAF",
  blue: "#6DB6FC",
  purple: "#9A57fC",
  pink: "#FD57E1"
}

theme.color.background = theme.color.black
theme.color.primary = theme.color.white
theme.color.focus = "#069BFA"

theme.font.sans = "'Roboto', sans-serif"
theme.font.mono = "'Roboto Mono', monospace"
theme.font.slab = "'Roboto Slab', serif"

theme.font = {
  weight: "normal",
  size: "16px",
  tiny: "13px",
  height: 1.5,
  color: theme.color.gray800,
  family: theme.font.sans
}

theme.time.now = "0ms"
theme.time.run = "250ms"
theme.time.runFaster = parseInt(theme.time.run.split("ms")[0]) / 10 + "ms"
theme.time.runFast = parseInt(theme.time.run.split("ms")[0]) / 2.5 + "ms"
theme.time.runSlow = parseInt(theme.time.run.split("ms")[0]) * 1.5 + "ms"
theme.time.runSlower = parseInt(theme.time.run.split("ms")[0]) * 2 + "ms"
theme.time.sooner = theme.time.runFaster
theme.time.soon = theme.time.runFast
theme.time.late = theme.time.runSlow
theme.time.later = theme.time.runSlower

theme.time.fadein = "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
theme.time.bounce = "cubic-bezier(.55, 0, .55, 1.44)"
theme.time.deform = "cubic-bezier(0.39, 0.575, 0.565, 1)"

theme.font.font = `${theme.font.weight} ${theme.font.size}/${theme.font.height} ${theme.font.family}`
theme.font.code = `${theme.font.weight} ${theme.font.tiny}/20px ${theme.font.mono}`

theme.size = {
  tile: base + unit,
  tileXL: base * base + unit,
  tileXXL: base * base * base + unit,
  tileXXS: base / base / base + unit,
  tileXS: base / base + unit,
  margin: base * theme.font.height + unit,
  padding: base * theme.font.height + unit,
  zUp: 1,
  zDown: -1
}

theme.border = {
  width: "1px",
  style: "solid",
  color: theme.color.gray300,
  radius: theme.size.tileXXS
}

theme.border.border = `${theme.border.width} ${theme.border.style} ${theme.border.color}`

theme.outline = {
  width: "2px",
  style: "solid",
  color: theme.color.focus,
  offset: "1px"
}

theme.outline.outline = `${theme.outline.color} ${theme.outline.style} ${theme.outline.width}`

export { theme }

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
