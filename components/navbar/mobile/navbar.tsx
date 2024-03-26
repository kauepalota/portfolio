'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

import NavbarLink from './navbar-link'
import { HomeIcon, Menu, PaintBucketIcon, PhoneCallIcon } from 'lucide-react'
import { useState } from 'react'

export function MobileNavbar() {
  const [open, setOpen] = useState(false)

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <nav className="grid gap-6 text-lg font-medium">
          <NavbarLink
            onClick={() => handleLinkClick()}
            destination="#introduction"
          >
            <HomeIcon className="mr-2 size-5" />
            Introduction
          </NavbarLink>
          <NavbarLink onClick={() => handleLinkClick()} destination="#skills">
            <PaintBucketIcon className="mr-2 size-5" />
            Skills
          </NavbarLink>
          <NavbarLink onClick={() => handleLinkClick()} destination="#contact">
            <PhoneCallIcon className="mr-2 size-5" />
            Contact
          </NavbarLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
