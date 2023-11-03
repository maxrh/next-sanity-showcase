"use client"

import { MENU_ITEMS_QUERY, sanityFetcher } from "@/app/sanity/sanity.query"
import { ColorContext } from "@/app/context/colorContext"
import { useContext } from "react"
import { motion } from "framer-motion"
import useSWR from 'swr'
import Link from "next/link"

export default function MainNav() {

    const { currentPageColors } = useContext(ColorContext)

    const { data, error } = useSWR(MENU_ITEMS_QUERY, sanityFetcher)
    if (error) {console.log('error', error)}

    const activeItem = data?.find(item => item.metadata.slug.current === currentPageColors?.slug || currentPageColors?.slug.startsWith(`${item.metadata.slug.current}/`))

    
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
                            const activeClasses = isActivePath ? 'opacity-100 top-10' : 'opacity-0 -top-10 group-hover:-top-6 group-hover:opacity-100'

                            return (
                                                    
                                <motion.div 
                                    key={index} 
                                    className="flex items-stretch relative  group"
                                    variants={itemVariant}
                                    animate={{ 
                                        color: currentPageColors?.menuColor || (currentPageColors?.theme === 'dark' ? 'var(--background-hex)' : 'var(--foreground-hex)'),
                                        transition: { ...transitionConfig }
                                    }}
                                
                                >
                                    <Link href={`${item.metadata.slug.current}`} className={`flex items-center ml-1 px-4 text-2xl font-bold leading-none`}>
                                        <span className="relative z-10">{item.metadata.title}</span>

                                        <div className={`absolute mx-auto left-0 right-0 flex items-center justify-center pointer-events-none ${activeClasses} transition-all`}>
                                            <i className="symbol z-10" style={{ fontVariationSettings: `'wght' 400`, fontSize: '32px' }}>arrow_drop_down</i>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                    })}

                    <motion.button
                        className={`group relative ml-4 flex items-center justify-center w-10 h-full`}
                        variants={itemVariant}
                        animate={{ 
                            color: currentPageColors?.menuColor || (currentPageColors?.theme === 'dark' ? 'var(--background-hex)' : 'var(--foreground-hex)'),
                            transition: { ...transitionConfig }
                        }}
                    >
                        <i 
                            className="symbol z-10" 
                            style={{ fontVariationSettings: `'wght' 700`, fontSize: '28px' }}
                        >
                            search
                        </i>
                    </motion.button>
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
