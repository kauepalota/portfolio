import NavbarLink from './navbar-link'

export function MainNavbar() {
  return (
    <nav className="hidden gap-6 md:flex">
      <NavbarLink destination="#introduction">Introduction</NavbarLink>
      <NavbarLink destination="#skills">Skills</NavbarLink>
      <NavbarLink destination="#contact">Contact</NavbarLink>
    </nav>
  )
}
