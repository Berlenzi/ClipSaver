"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ClipApp } from "@/components/clip-app"

export default function Home() {
  return (
    <SidebarProvider>
      <ClipApp />
    </SidebarProvider>
  )
}

