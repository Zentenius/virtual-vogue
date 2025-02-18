"use client"

import * as React from "react"
import {
  Command,
  History,
  Settings
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  className="" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Virtualize your room</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-4 space-y-4">
          <div>
            <SelectGroup>
            <SelectLabel>Room Type</SelectLabel>
            <Select>
            <SelectTrigger className="w-full p-2 border rounded-md">
              <SelectValue  className="block text-sm font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bedroom">Bedrom</SelectItem>
              <SelectItem value="living room">Living Room</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="bathroom">Bathroom</SelectItem>
            </SelectContent>
          </Select>
          </SelectGroup>
          </div>
          <div>
            <Label>Room Length (ft)</Label>
            <Input type="number" className="w-full p-2 border rounded-md" />
          </div>
          <div>
          <Label>Room Width (ft)</Label>
          <Input type="number" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Layouts</label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <button key={number} className="p-2 border rounded-md hover:bg-gray-100">
                  {number}
                </button>
              ))}
            </div>
          </div>
          <div>
            <SelectGroup>
            <SelectLabel>Design Style</SelectLabel>
            <Select>
            <SelectTrigger className="w-full p-2 border rounded-md">
              <SelectValue  className="block text-sm font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="contemporary">Contemporary</SelectItem>
              <SelectItem value="Minimalist">Minimalist</SelectItem>
              <SelectItem value="traditional">Traditonal</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="scandinavian">Scandinavian</SelectItem>
            </SelectContent>
          </Select>
          </SelectGroup>

          </div>
          <div>
            <SelectGroup>
            <SelectLabel>Color Scheme</SelectLabel>
            <Select>
            <SelectTrigger className="w-full p-2 border rounded-md">
              <SelectValue  className="block text-sm font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="neutral">Neutral</SelectItem>
              <SelectItem value="warm">Warm</SelectItem>
              <SelectItem value="cool">Cool</SelectItem>
              <SelectItem value="monochromatic">Monochromatic</SelectItem>
              <SelectItem value="bold">Bold & Vibrant</SelectItem>
            </SelectContent>
          </Select>
          </SelectGroup>
          </div>
          <div>
            <SelectGroup>
            <SelectLabel>Budget Level</SelectLabel>
            <Select>
            <SelectTrigger className="w-full p-2 border rounded-md">
              <SelectValue  className="block text-sm font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">Budget-Friendly</SelectItem>
              <SelectItem value="mid-range">Mid-Range</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="ultra-luxury">Ultra Luxury</SelectItem>
            </SelectContent>
          </Select>
          </SelectGroup>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
