"use client"
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild >
        <Button variant="outline" size="icon">
            <SunIcon className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
            System
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
  )
}
