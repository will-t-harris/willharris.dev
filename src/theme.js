import { css } from "twin.macro"

export const themeLight = css`
  background: #f4f9fc;
  color: #323d79;
`

export const themeDark = css`
  background: #272525;
  color: #f4f9fc;
`

export const theme = (mode) => (mode === "dark" ? themeDark : themeLight)
