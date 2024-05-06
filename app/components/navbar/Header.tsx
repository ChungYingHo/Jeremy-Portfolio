'use client'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@nextui-org/react'
import { Logo } from './Logo'
import GitHubIcon from './GitHubIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = ['Home', 'Portfolio', 'Blog', 'GitHub']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-foreground">Chung-Ying</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="primary" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
