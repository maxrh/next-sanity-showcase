"use client"

import { ColorContext } from "../context/colorContext"
import { useContext } from "react"

export default function SiteLayout({ children }) {

    const { pageColors, currentPath } = useContext(ColorContext)

    console.log(pageColors, currentPath, 'sitelayout')


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}<p>site layout</p>
        </main>
    )
}
