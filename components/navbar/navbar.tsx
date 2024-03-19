import NavbarLink from './navbar-link'

export function Navbar() {
  return (
    <nav className="flex gap-4 sm:gap-6">
      <NavbarLink name="Projects" />
      <NavbarLink name="About" />
      <NavbarLink name="Contact" />
    </nav>
  )
}
