import NavbarLink from './navbar-link'

export function Navbar() {
  return (
    <nav className="flex gap-6">
      <NavbarLink name="Skills" destination="#skills" />
      <NavbarLink name="Contact" destination="#contact" />
    </nav>
  )
}
