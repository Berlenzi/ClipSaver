"use client"

import { useState } from "react"
import { CalendarIcon, Download, MoreHorizontal, Plus, Share2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

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

interface ClipContentProps {
  game: Game
}

export function ClipContent({ game }: ClipContentProps) {
  const [selectedClip, setSelectedClip] = useState(game.clips[0])

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{game.icon}</span>
          <h2 className="text-xl font-semibold">{game.name}</h2>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">{game.clips.length} clips</span>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Clip
        </Button>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 overflow-auto p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 content-start">
        {game.clips.map((clip) => (
          <Card
            key={clip.id}
            className={cn(
              "overflow-hidden transition-all hover:shadow-md",
              selectedClip.id === clip.id && "ring-2 ring-primary",
            )}
            onClick={() => setSelectedClip(clip)}
          >
            <div className="relative aspect-video bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=120&width=200&text=Clip+Thumbnail`}
                  alt={clip.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-xs line-clamp-1">{clip.title}</h3>
                <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">{clip.duration}</span>
              </div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <CalendarIcon className="h-3 w-3 mr-1" />
                <span>{clip.date}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-2 pt-0">
              <Button variant="ghost" size="sm" className="h-6 text-xs px-2">
                <Share2 className="mr-1 h-3 w-3" />
                Share
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

