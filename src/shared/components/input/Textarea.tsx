import React from "react"
import clsx from "clsx"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        {...props}
        className={clsx(
          "w-full px-4 py-2 border rounded-lg outline-none focus:border-primary transition-all resize-none",
          error ? "border-red-500" : "border-gray-200",
          className
        )}
        rows={4}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export { Textarea }
