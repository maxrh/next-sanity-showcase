"use client"

import { ColorContext } from "../context/colorContext"
import { useContext, useEffect } from "react"

export default function PageLayout({ children }) {
    const { pageColors, currentPath, currentPageTheme } = useContext(ColorContext)


    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}<p>site layout</p>
        </div>
    )
}
