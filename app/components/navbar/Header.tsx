'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image
} from '@nextui-org/react'
import { Logo } from './Logo'
import GitHubIcon from './GitHubIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: 'https://codefictionist.com/' },
    { name: 'GitHub', href: 'https://github.com/ChungYingHo' }
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <Logo /> */}
          <Image src="/logo.png" alt="Chung-Ying" width={36} height={36} />
          <p className="ml-1 font-bold text-foreground">Chung-Ying</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color={pathname === '/' ? 'secondary' : 'foreground'} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/portfolio"
            aria-current="page"
            color={pathname === '/portfolio' ? 'secondary' : 'foreground'}
          >
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="https://codefictionist.com/"
            target="_blank"
          >
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            as={Link}
            color="secondary"
            href="https://github.com/ChungYingHo"
            target="_blank"
            variant="bordered"
          >
            <GitHubIcon />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link color="primary" className="w-full" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
