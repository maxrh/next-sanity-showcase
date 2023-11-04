"use client"

import { PageContext } from "../context/PageContext"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SoMeSidebarBlock from "../components/SoMeSidebarBlock"
import NavSidebarBlock from "../components/NavSidebarBlock"
import PageImage from "../components/PageImage"

export default function PageLayout({ children }) {
    const { currentPageData } = useContext(PageContext)

    return (
        <div className="pt-[120px]">
            <PageImage />
                
            

            { currentPageData?.slideshow === true 
                ? <div className=" h-[calc(60vh-120px)] w-full relative z-10 pt-8"><HeroSection id={'about'} noBottomBar/></div>
                : <div className=" h-[calc(60vh-120px)] w-full relative z-10"></div>
            }
        
            <div className="relative z-10 px-16">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-16 
                    md:grid-cols-[208px,1fr] 
                    xl:grid-cols-[256px,auto,224px]
                    2xl:grid-cols-[256px,auto,224px] `}>
                        
                        <div className={`navigation relative hidden md:flex flex-col h-full w-full  border-slate-950/50`}>
                            <NavSidebarBlock />
                        </div>
                        <div className="min-h-screen w-full py-14 dark"
                            style={{ color: `var(--foreground)` }}
                        >
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col h-full border-gray-950/30`}>
                            <SoMeSidebarBlock />
                            {/* <SidebarContentNav /> */}
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
