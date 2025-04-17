import React from "react"
import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  error?: string
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        name={name}
        {...props}
        className={clsx(
          "w-full px-4 py-2 border rounded-lg outline-none focus:border-primary transition-smooth",
          error ? "border-red-500" : "border-gray-200",
          className
        )}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export { Input }
