"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ManualThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    // Apply the initial theme based on user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark && !isDarkMode) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <Button variant="outline" size="icon" className="bg-background" onClick={toggleTheme}>
      <Sun className={`h-[1.2rem] w-[1.2rem] ${isDark ? "scale-0" : "scale-100"} transition-all`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] ${isDark ? "scale-100" : "scale-0"} transition-all`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

