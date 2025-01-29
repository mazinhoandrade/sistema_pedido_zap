"use client"
 
import * as React from "react"
import { Laptop, Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

 
export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    
    <>
      {theme === "system" && (
        <div onClick={() => setTheme("light")}>
          <Laptop className="h-6 w-6" />
        </div>
      )}
      {theme === "dark" ? (
        <div onClick={() => setTheme("light")}>
        <Sun className="h-6 w-6" />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <MoonIcon className="h-6 w-6" />
        </div>  
      )}
  


    {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
         <Moon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
         <Laptop className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}


    </>
  )
}