import Link from 'next/link'
import { NavbarProps } from '../link'

export default function MobileLink({
  destination,
  external,
  children,
}: NavbarProps) {
  return (
    <Link
      target={external ? '_blank' : '_self'}
      href={destination}
      className="text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  )
}
