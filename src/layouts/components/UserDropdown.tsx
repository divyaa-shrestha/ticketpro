import React from "react"

import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/components/dropdown"
import { Button } from "@/shared/components/button/Button"

const UserDropdown: React.FC = () => {
  const renderTrigger = () => (
    <DropdownTrigger ariaLabel="Select language">
      <i className="ri-user-line text-xl"></i>
    </DropdownTrigger>
  )

  return (
    <>
      <Dropdown trigger={renderTrigger()}>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <i className="ri-user-line text-2xl text-gray-400"></i>
          </div>
          <div>
            <div className="text-sm font-medium">Guest User</div>
            <div className="text-xs text-gray-500">
              Sign in to access your account
            </div>
          </div>
        </div>
        <div className="py-2 my-2 border-y border-y-gray-200">
          <DropdownItem>My Tickets</DropdownItem>
          <DropdownItem>Order History</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
        <Button color="primary" fullWidth fullRounded={false}>
          Sign In
        </Button>
      </Dropdown>
    </>
  )
}

export { UserDropdown }
