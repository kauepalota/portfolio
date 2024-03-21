import { Navbar } from './navbar/navbar'

import { ThemeSwitcher } from './theme/theme-switcher'

export function Header() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Navbar />

      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
    </header>
  )
}
