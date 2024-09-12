"use client"

import { Command } from 'cmdk'
import React from "react"

const CommandMenu = () => {
    const [open, setOpen] = React.useState(false)

    // Toggle the menu when ⌘K is pressed
    React.useEffect(() => {
        const down = (e: any) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu" className="fixed z-20 bg-black/30 backdrop-blur-sm">
            <div className='bg-white w-[300px] flex justify-center mt-10'>
                <Command.Input />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>

                    <Command.Group heading="Letters">
                        <Command.Item>a</Command.Item>
                        <Command.Item>b</Command.Item>
                        <Command.Separator />
                        <Command.Item>c</Command.Item>
                    </Command.Group>

                    <Command.Item>Apple</Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu