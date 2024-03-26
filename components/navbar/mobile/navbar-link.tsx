import Link from 'next/link'
import { NavbarProps } from '../link'
import React from 'react'

export default function MobileLink({
  destination,
  external,
  children,
  ...props
}: NavbarProps & React.LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      target={external ? '_blank' : '_self'}
      href={destination}
      className="flex items-center text-muted-foreground hover:text-foreground"
      {...props}
    >
      {children}
    </Link>
  )
}
