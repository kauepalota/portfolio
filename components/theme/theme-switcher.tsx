'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

import { Sun, Moon } from 'lucide-react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button className="rounded-3xl p-2" onClick={toggleTheme} variant="ghost">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
