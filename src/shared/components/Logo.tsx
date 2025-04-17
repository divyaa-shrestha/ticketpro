import React from "react"

import logo from "@/assets/logo/ticketpro-logo.png"
import { cn } from "@/shared/utils/cn"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="/">
      <img src={logo} className={cn("h-10", className)} alt="TicketPro Logo" />
    </a>
  )
}

export { Logo }
