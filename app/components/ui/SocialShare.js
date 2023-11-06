"use client"

import Link from "next/link"
import { PageContext } from "../../context/PageContext"
import { useContext } from 'react'
import { IoLogoTwitter, IoLogoFacebook, IoLogoYoutube, IoLogoFlickr, IoLogoLinkedin, IoLogoInstagram, IoLogoRss } from "react-icons/io5"
import BlockTitle from "./BlockTitle"

export default function SocialShare({ pageColors }) {
  

    const socialIcons = [
        {
            icon: <IoLogoTwitter />,
            href: 'https://twitter.com/NoahDK',
        },
        {
            icon: <IoLogoFacebook />,
            href: 'https://www.facebook.com/NoahDK',
        },
     
    ]

    return (
        <div className="social-share-widget sticky top-0 pt-6 inline-flex flex-col items-end justify-center">
           
            <span className="font-medium text-sm mb-2">Share</span>

            <div className="flex  items-center ">
                {socialIcons.map((icon, index) => (
                    <Link 
                        key={index}
                        href={icon.href} 
                        className="text-[24px] p-3 ml-1"
                        style={{ 
                            backgroundColor: pageColors.primaryColor, 
                            color: pageColors.backgroundColor
                        }}
                    >
                        {icon.icon}
                    </Link>
                ))}                    
            </div>
        </div>
    )
}
