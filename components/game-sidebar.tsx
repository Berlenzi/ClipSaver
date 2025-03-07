"use client"

import { Plus, Search } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Game {
  id: string
  name: string
  icon: string
  clips: {
    id: string
    title: string
    date: string
    duration: string
  }[]
}

interface GameSidebarProps {
  games: Game[]
  selectedGame: Game
  onSelectGame: (game: Game) => void
}

export function GameSidebar({ games, selectedGame, onSelectGame }: GameSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search games..."
            className="h-9"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>My Games</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {games.map((game) => (
                <SidebarMenuItem key={game.id}>
                  <SidebarMenuButton onClick={() => onSelectGame(game)} isActive={selectedGame.id === game.id}>
                    <span className="mr-2 text-xl">{game.icon}</span>
                    <span>{game.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{game.clips.length}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Game
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

