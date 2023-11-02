"use client"

import { createContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ColorContext = createContext()

const ColorContextProvider = ({ currentPath, pageColors, children }) => {

    console.log(currentPath, 'context')


    return (
        <ColorContext.Provider value={{ pageColors, currentPath }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider