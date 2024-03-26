import Link from 'next/link'
import { NavbarProps } from '../link'

export default function MainLink({
  children,
  destination,
  external,
}: NavbarProps) {
  return (
    <Link
      target={external ? '_blank' : '_self'}
      href={destination}
      className="text-sm font-medium underline-offset-4 hover:underline lg:text-base"
    >
      {children}
    </Link>
  )
}
