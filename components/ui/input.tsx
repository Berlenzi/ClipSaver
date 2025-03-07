import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, prefix, suffix, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      {prefix && <div className="absolute left-2.5 flex items-center pointer-events-none">{prefix}</div>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          prefix && "pl-9",
          suffix && "pr-9",
          className,
        )}
        ref={ref}
        {...props}
      />
      {suffix && <div className="absolute right-2.5 flex items-center pointer-events-none">{suffix}</div>}
    </div>
  )
})
Input.displayName = "Input"

export { Input }

