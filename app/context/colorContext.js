"use client"

import { createContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme, ThemeProvider } from 'next-themes'
import useSWR from 'swr'
import { PAGE_COLORS_QUERY, sanityFetcher  } from '../sanity/sanity.query'

export const ColorContext = createContext()

const ColorContextProvider = ({ children }) => {
    const pathname = usePathname()
    const [currentPageColors, setCurrentPageColors] = useState(null)

    const { data, error } = useSWR(PAGE_COLORS_QUERY, sanityFetcher)
    if (error) {console.log('error', error)}

    useEffect(() => {
        if (!localStorage.getItem('pageColors') && data) {
            const colors = data.map(item => {
                return {
                    slug: item.metadata.slug.current,
                    theme: item.pageColors.themeselector,
                    menuColor: item.pageColors.menuColor?.hex || null,
                    primaryColor: item.pageColors.primaryColor?.hex || null,
                    backgroundColor: item.pageColors.backgroundColor?.hex || null,
                }
            })
    
            localStorage.setItem('pageColors', JSON.stringify(colors))
        }
    
        const storedColors = JSON.parse(localStorage.getItem('pageColors'))
    
        if (storedColors) {
            const currentPageData = storedColors.find(item => item.slug === pathname)
            setCurrentPageColors(currentPageData)
        }
    }, [pathname, data])
    

    console.log('currentPageTheme', currentPageColors);

    return (
        <ColorContext.Provider value={{ currentPageColors }}>
            <div className={`page-container transition-colors duration-500 ease-in-out`}
                style={{ backgroundColor: currentPageColors?.backgroundColor?.hex || currentPageColors?.theme === 'dark' ? 'var(--foreground-hex)' : 'var(--background-hex)' }}
            >
                <div className={`theme-control ${currentPageColors?.theme}`}>
                    {children}
                </div>
            </div>
        </ColorContext.Provider>
    )
}

export default ColorContextProvider