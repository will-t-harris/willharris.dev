import { css } from "twin.macro"

const themeLight = css`
  background: #f4f9fc;
  color: #323d79;
`

const themeDark = css`
  background: #272525;
  color: #f4f9fc;
`
export const theme = (mode) => (mode === "dark" ? themeDark : themeLight)
