import React from "react"
import Switch from "react-switch"
import useDarkMode from "use-dark-mode"

export const DarkModeToggle = () => {
  const darkMode = useDarkMode()

  return (
    <Switch
      tw="self-center"
      onChange={darkMode.toggle}
      checked={darkMode.value}
      aria-label="dark mode toggle button"
      checkedIcon={false}
      uncheckedIcon={false}
      offColor="#323d79"
      offHandleColor="#f4f9fc"
      onColor="#f4f9fc"
      onHandleColor="#272525"
      handleDiameter={20}
    />
  )
}
