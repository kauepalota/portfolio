import { Navbar } from './navbar/navbar'

export function Header() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Navbar />

      <button className="ml-auto">🌞</button>
    </header>
  )
}
