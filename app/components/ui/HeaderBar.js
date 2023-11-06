import Link from "next/link"
import Image from "next/image"
import { IoLogoTwitter, IoLogoFacebook, IoLogoYoutube, IoLogoFlickr, IoLogoLinkedin, IoLogoInstagram, IoLogoRss } from "react-icons/io5"
import Breadcrumb from "./Breadcrumb"
import CTAButtons from "./CTAButtons"

export default function HeaderBar({ pageColors }) {
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
            icon: <IoLogoFlickr  />,
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
        <div className="header-bar h-20 px-16 z-10 relative">

            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full mx-auto">
                <div className="flex items-center font-semibold text-2xl ">
                    <Breadcrumb />
                </div>

                <div className="flex items-center">
                    {/* <CTAButtons pageColors={pageColors} /> */}
                </div>

                {/* <div className="flex items-center">
                    <span 
                        className="mr-6 font-medium"
                    >
                        Follow </span>
                    {socialIcons.map((icon, index) => (
                        <div key={index} className="">
                            <Link 
                                href={icon.href} 
                                className="flex items-center justify-center aspect-square text-[24px] h-10 w-10" 
                               
                            >
                                    {icon.icon}
                            </Link>
                        </div>
                    ))}
                        
                </div> */}
            </div>
            
        </div>
    )
}