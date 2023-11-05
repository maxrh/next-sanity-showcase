"use client"

import Link from "next/link"
import { PageContext } from "../../context/PageContext"
import { useContext } from 'react'
import { IoLogoTwitter, IoLogoFacebook, IoLogoYoutube, IoLogoFlickr, IoLogoLinkedin, IoLogoInstagram, IoLogoRss } from "react-icons/io5"
import BlockTitle from "./BlockTitle"

export default function SoMeSidebarBlock() {
    const { currentPageData } = useContext(PageContext)

    const primaryColor = currentPageData?.primaryColor || 'var(--primary-hex)'
    const backgroundColor = currentPageData?.backgroundColor || 'var(--background-hex)'

    const socialIcons = [
        {
            icon: <IoLogoTwitter />,
            href: 'https://twitter.com/NoahDK',
        },
        {
            icon: <IoLogoFacebook />,
            href: 'https://www.facebook.com/NoahDK',
        },
        {
            icon: <IoLogoYoutube />,
            href: 'https://www.youtube.com/user/NoahDK',
        },
        {
            icon: <IoLogoFlickr />,
            href: 'https://www.flickr.com/photos/noahdk',
        },
        {
            icon: <IoLogoLinkedin />,
            href: 'https://www.linkedin.com/company/noah-danmark/',
        },
        {
            icon: <IoLogoInstagram />,
            href: 'https://www.instagram.com/noah_dk/',
        }
    ]

    return (
        <div className="some-sidebar-widget pt-16" style={{ borderColor: primaryColor }}>
            <div 
                className="flex flex-col"
                style={{ borderColor: primaryColor}}
            >
                <BlockTitle title="Sociale medier" />

                {/* <h5 className="text-lg font-medium mb-8 leading-none px-8 border-l-4 h-6 flex items-center" style={{ borderColor: primaryColor }}>Social medier</h5> */}
                <div className="grid grid-cols-3 gap-px ">
                    {socialIcons.map((icon, index) => (
                        <div key={index} className="">
                            <Link 
                                href={icon.href} 
                                className="flex items-center justify-center aspect-square text-[24px]"
                                style={{ color: backgroundColor, backgroundColor: primaryColor }}
                            >
                                    {icon.icon}
                            </Link>
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    )
}
