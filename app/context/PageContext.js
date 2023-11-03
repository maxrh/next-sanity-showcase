"use client"

import { createContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { PAGE_LAYOUT_QUERY, sanityFetcher  } from '../sanity/sanity.query'
import useSWR from 'swr'

export const PageContext = createContext()

const PageContextProvider = ({ serverCurrentPage, children }) => {
    const pathname = usePathname()
    const [currentPageData, setCurrentPageData] = useState({
        slug: serverCurrentPage?.metadata.slug.current || null,
        theme: serverCurrentPage?.pageColors.themeselector || null,
        menuColor: serverCurrentPage?.pageColors.menuColor?.hex || null,
        primaryColor: serverCurrentPage?.pageColors.primaryColor?.hex || null,
        backgroundColor: serverCurrentPage?.pageColors.backgroundColor?.hex || null,
        imageUrl: serverCurrentPage?.content?.featuredImage.imageUrl || null,
        imageAlt: serverCurrentPage?.content?.featuredImage.alt || null,
    })
    
    const { data, error } = useSWR(PAGE_LAYOUT_QUERY, sanityFetcher)
    if (error) {console.log('error', error)}

    useEffect(() => {
        if (!localStorage.getItem('pageData') && data) {
            const pageData = data.map(item => {
                return {
                    slug: item.metadata.slug.current || null,
                    theme: item.pageColors.themeselector || null,
                    menuColor: item.pageColors.menuColor?.hex || null,
                    primaryColor: item.pageColors.primaryColor?.hex || null,
                    backgroundColor: item.pageColors.backgroundColor?.hex || null,
                    imageUrl: item.content?.featuredImage.imageUrl || null,
                    imageAlt: item.content?.featuredImage.alt || null,
                }
            })
    
            localStorage.setItem('pageData', JSON.stringify(pageData))
        }
    
        const storedData = JSON.parse(localStorage.getItem('pageData'))
    
        if (storedData) {
            const currentPageData = storedData.find(item => item.slug === pathname)
            setCurrentPageData(currentPageData)
        }
    }, [pathname, data])
    
    return (
        <PageContext.Provider value={{ currentPageData }}>
            <div 
                className={`page-container transition-colors duration-500 ease-in-out bg-background ${currentPageData?.theme}`}
                style={{ 
                    backgroundColor: currentPageData?.backgroundColor?.hex || (currentPageData?.theme === 'dark' ? 'var(--foreground-hex-static)' : 'var(--background-hex-static)'),
                    color: currentPageData?.theme === 'dark' ?  'var(--background-hex-static)' : 'var(--foreground-hex-static)' ,
                }}
            >
                {children}
            </div>
        </PageContext.Provider>
    )
}

export default PageContextProvider