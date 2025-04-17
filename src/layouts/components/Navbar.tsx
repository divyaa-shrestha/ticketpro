import React from "react"

import { Logo } from "@/shared/components/Logo"
import { Container } from "@/shared/components/container"

import { NavItem } from "./NavItem"
import { UserDropdown } from "./UserDropdown"
import { CategoryList } from "./CategoryList"

const Navbar: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 w-full z-30">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
            <nav className="ml-12 flex items-center space-x-1">
              <NavItem to="/" label="Events" />
              <NavItem to="/venues" label="Venues" />
              <NavItem to="/gift-cards" label="Gift Cards" />
              <NavItem to="/help" label="Help" />
            </nav>
          </div>
          <div className="flex-1 max-w-2xl mx-12 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events, artists, or venues..."
                className="peer w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-primary transition-smooth"
              />
              <div className="absolute left-4 top-1/2 peer-focus:text-primary -translate-y-1/2 size-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line"></i>
              </div>
            </div>
          </div>
          <UserDropdown />
        </div>
        <CategoryList />
      </Container>
    </header>
  )
}

export { Navbar }
