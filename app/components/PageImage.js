"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function PageImage({ imageData }) {

    return (
        <AnimatePresence>
            <motion.div
                key={imageData.imageUrl}
                className="absolute top-0 left-0 flex flex-col items-center justify-center h-[100vh] w-full -z-1"
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
                    src={imageData.imageUrl} 
                    alt={imageData.alt} 
                    priority 
                /> 
            </motion.div>
        </AnimatePresence>
    )
}