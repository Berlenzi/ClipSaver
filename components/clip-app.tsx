"use client"

import { useState } from "react"
import { GameSidebar } from "@/components/game-sidebar"
import { ClipContent } from "@/components/clip-content"
import { SidebarInset } from "@/components/ui/sidebar"
// import { ThemeToggle } from "@/components/theme-toggle"
import { ManualThemeToggle } from "@/components/manual-theme-toggle"

// Sample data
export const games = [
  {
    id: "1",
    name: "R.E.P.O",
    icon: "🎮",
    clips: [
      { id: "1", title: "Spaccamuro Fa cacca", date: "2023-05-15", duration: "00:45" },
      { id: "2", title: "Momax Esplode", date: "2023-05-20", duration: "00:32" },
      { id: "3", title: "Faccio cacca", date: "2023-06-01", duration: "01:15" },
    ],
  },
  {
    id: "2",
    name: "Call of Duty",
    icon: "🔫",
    clips: [
      { id: "4", title: "Quad Kill", date: "2023-04-10", duration: "00:28" },
      { id: "5", title: "Clutch Win", date: "2023-04-22", duration: "01:05" },
    ],
  },
  {
    id: "3",
    name: "Minecraft",
    icon: "⛏️",
    clips: [
      { id: "6", title: "Diamond Find", date: "2023-03-05", duration: "00:52" },
      { id: "7", title: "House Build Timelapse", date: "2023-03-15", duration: "02:30" },
      { id: "8", title: "Ender Dragon Fight", date: "2023-03-28", duration: "03:45" },
    ],
  },
  {
    id: "4",
    name: "League of Legends",
    icon: "🧙",
    clips: [
      { id: "9", title: "Pentakill", date: "2023-02-12", duration: "00:35" },
      { id: "10", title: "Baron Steal", date: "2023-02-25", duration: "00:20" },
    ],
  },
  {
    id: "5",
    name: "Valorant",
    icon: "🎯",
    clips: [
      { id: "11", title: "Ace Clutch", date: "2023-01-08", duration: "01:10" },
      { id: "12", title: "Wall Bang Headshot", date: "2023-01-20", duration: "00:15" },
      { id: "13", title: "Spike Defuse", date: "2023-01-30", duration: "00:40" },
    ],
  },
]

export function ClipApp() {
  const [selectedGame, setSelectedGame] = useState(games[0])

  return (
    <div className="flex h-screen w-full">
      <GameSidebar games={games} onSelectGame={setSelectedGame} selectedGame={selectedGame} />
      <SidebarInset>
        <div className="flex h-full flex-col">
          <header className="flex h-14 items-center justify-between border-b px-4">
            <h1 className="text-xl font-semibold">ClipSaver</h1>
            <ManualThemeToggle />
          </header>
          <ClipContent game={selectedGame} />
        </div>
      </SidebarInset>
    </div>
  )
}

