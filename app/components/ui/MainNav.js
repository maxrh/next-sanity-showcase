"use client"

import { MENU_ITEMS_QUERY, sanityFetcher } from "@/app/sanity/sanity.query"
import { PageContext } from "@/app/context/PageContext"
import { useContext } from "react"
import { motion } from "framer-motion"
import useSWR from 'swr'
import Link from "next/link"

export default function MainNav() {

    const { currentPageData } = useContext(PageContext)

    const { data, error } = useSWR(MENU_ITEMS_QUERY, sanityFetcher)
    if (error) {console.log('error', error)}

    const activeItem = data?.find(item => item.metadata.slug.current === currentPageData?.slug || currentPageData?.slug.startsWith(`${item.metadata.slug.current}/`))

    
    const containerVariant = {
        hidden: {},
        show: { 
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    }

    const transitionConfig = {
        type: "tween", 
        ease: "easeInOut",
        duration: .15,
    }

    const itemVariant = {
        hidden: { 
            opacity: 0, 
            y: -10,
        },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { ...transitionConfig  }
        }                      
    }

    return (
        <nav className="main-nav flex items-center">
            { data && 
                
                <motion.div 
                    className={`flex items-stretch h-10`}
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                >
                       {data.map((item, index) => {
                            const isActivePath = activeItem === item
                            const activeClasses = isActivePath ? 'opacity-100 translate-y-8' : 'opacity-0 -translate-y-12 group-hover:-translate-y-7 group-hover:opacity-100'

                            return (
                                                    
                                <motion.div 
                                    key={index} 
                                    className="flex items-stretch relative group"
                                    variants={itemVariant}
                                    animate={{ 
                                        transition: { ...transitionConfig }
                                    }}
                                
                                >
                                    <Link 
                                        href={`${item.metadata.slug.current}`} 
                                        className={`flex items-center ml-1 px-4 text-2xl font-bold leading-none transition-colors duration-200 ease-in-out`}
                                        style={{ color: currentPageData?.menuColor || (currentPageData?.theme === 'dark' ? 'var(--background-hex-static)' : 'var(--foreground-hex-static)') }}
                                    >
                                        <span className="relative z-10">{item.metadata.title}</span>
                                        <div className={`absolute mx-auto left-0 right-0 flex items-center justify-center pointer-events-none ${activeClasses} transition-all duration-200 ease-in-out`}>
                                           
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                height="32"
                                                width="32"
                                                viewBox="0 -960 960 960" 
                                                className="absolute z-0 transition-fill duration-200 ease-in-out"
                                                style={{ fill: currentPageData?.menuColor || (currentPageData?.theme === 'dark' ? 'var(--background-hex-static)' : 'var(--foreground-hex-static)') }}
                                            ><path d="M480-360 280-560h400L480-360Z"/></svg>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                    })}

                    <motion.div 
                        className="group relative ml-4 flex items-stretch group w-10 h-full"
                        variants={itemVariant}
                        animate={{ 
                            transition: { ...transitionConfig }
                        }}
                    >
                        <button className={`flex items-center justify-center w-full h-full`}> 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="28"
                                height="28" 
                                viewBox="0 -960 960 960" 
                                className="transition-fill duration-200 ease-in-out"
                                style={{ fill: currentPageData?.menuColor || (currentPageData?.theme === 'dark' ? 'var(--background-hex-static)' : 'var(--foreground-hex-static)') }}
                            ><path d="M782-82 523-341q-29 20-67.5 32T372-297q-118 0-200.5-82.5T89-580q0-118 82.5-200.5T372-863q118 0 200.5 82.5T655-580q0 46-12 83.5T611-431l260 261-89 88ZM372-423q66 0 111.5-45.5T529-580q0-66-45.5-111.5T372-737q-66 0-111.5 45.5T215-580q0 66 45.5 111.5T372-423Z"/></svg>
                        </button>
                    </motion.div>
                </motion.div>
            
            }

            <form className="search hidden items-center">
                <input type="text" placeholder="" className="search-input w-48 h-8  px-3 py-1.5"/>
                <button type="submit" className="search-submit ml-2 h-8 w-8 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M15 9a5 5 0 11-10 0 5 5 0 0110 0zM4 9a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/></svg>
                </button>
            </form>
            <button
                className="group flex flex-col items-center lg:hidden justify-center h-10 w-10 p-2"
                onClick={() => {
                    const menu = document.querySelector(".main-menu");
                    menu.classList.toggle("hidden");
                }}
            >
                
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
            </button>
            
        </nav>
    )
}
