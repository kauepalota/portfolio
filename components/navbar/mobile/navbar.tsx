import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

import NavbarLink from './navbar-link'
import { Menu } from 'lucide-react'

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <nav className="grid gap-6 text-lg font-medium">
          <NavbarLink destination="#introduction">Introduction</NavbarLink>
          <NavbarLink destination="#skills">Skills</NavbarLink>
          <NavbarLink destination="#contact">Contact</NavbarLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
