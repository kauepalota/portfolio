'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

import { Sun, Moon } from 'lucide-react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    if (!theme) {
      return
    }

    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button className="rounded-3xl p-2" onClick={toggleTheme} variant="ghost">
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
