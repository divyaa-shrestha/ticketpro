import React from "react"

interface EventRowCardProps {
  iconName: string
  title: string
  subtitle: string
  endSlot?: React.ReactNode
  onClick?: () => void
}

const EventRowCard: React.FC<EventRowCardProps> = ({
  iconName,
  title,
  subtitle,
  endSlot,
  onClick,
}) => {
  return (
    <div
      className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-smooth"
      onClick={onClick && onClick}
    >
      <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
        <i className={`ri-${iconName}-line text-xl`}></i>
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
      {endSlot}
    </div>
  )
}

export { EventRowCard }
