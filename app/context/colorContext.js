"use client"

import { createContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ColorContext = createContext()

const ColorContextProvider = ({ currentPath, pageColors, children }) => {

    console.log('pageColors context', currentPath, pageColors)


    return (
        <ColorContext.Provider value={{ pageColors }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider