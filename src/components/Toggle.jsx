import React from 'react'
import Toggle from "react-toggle"
import useColorScheme from '../hooks/ColorScheme'

function DarkModeToggle() {
    const {isDark,setIsDark } = useColorScheme()
  return (
    <Toggle
     checked = {isDark}
     onChange = {({target}) => setIsDark(target.checked)}
     icons = {{checked:"🌙", unchecked: "🔆" }}
     aria-label="Dark mode toggle"
     />
  )
}

export default DarkModeToggle
