"use client"

import { PageContext } from "../context/PageContext"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function PageLayout({ children }) {
    const { currentPageData } = useContext(PageContext)

    console.log(currentPageData?.imageUrl, 'currentPageData')



    return (
        <div className="pt-[120px]">
            <AnimatePresence>
                { currentPageData?.imageUrl &&      
                    <motion.div
                        key={currentPageData.imageUrl}
                        className="absolute top-0 left-0 flex flex-col items-center justify-center h-[100vh] w-full"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                            type: "tween",
                            ease: "easeInOut",
                            duration: .25 
                        }}
                    >
                        <Image 
                            className="mask-image object-cover object-center w-full h-full" 
                            width={1800} 
                            height={1013} 
                            src={currentPageData.imageUrl} 
                            alt={currentPageData.imageAlt} 
                            priority 
                        /> 
                    </motion.div>
                }
            </AnimatePresence>

            {/* { !isLoading && currentPageData?.slideshow === true 
                ? <div className=" h-[calc(60vh-120px)] w-full relative z-10 pt-8"><HeroSection id={'about'} noBottomBar/></div>
                : <div className=" h-[calc(60vh-120px)] w-full relative z-10"></div>
            } */}
        
            <div className="relative z-10 px-16">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-16 
                    md:grid-cols-[208px,1fr] 
                    xl:grid-cols-[256px,auto,224px]
                    2xl:grid-cols-[256px,auto,224px] `}>
                        
                        <div className={`navigation relative hidden md:flex flex-col h-full w-full  border-slate-950/50`}>
                            {/* <SidebarNav /> */}
                        </div>
                        <div className="min-h-screen w-full py-14 dark"
                            style={{ color: `var(--foreground)` }}
                        >
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col h-full border-gray-950/30`}>
                            {/* <SoMeSidebarWidget /> */}
                            {/* <SidebarContentNav /> */}
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
