import { PageContext } from "../context/PageContext"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function PageImage() {
	const { currentPageData } = useContext(PageContext)

    console.log(currentPageData?.imageUrl, 'currentPageData')

    return (
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
    )
}