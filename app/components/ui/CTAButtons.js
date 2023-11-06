import Link from "next/link"
import Image from "next/image"
import { Button } from "./Button"

export default function CTAButtons({ pageColors }) {
    const buttons = [
        
        {
            text: 'Bidrag',
            href: '/',
        },
        {
            text: 'Bliv aktiv',
            href: '/',
        },
    ]

    console.log(pageColors.primaryColor, 'pageColors')


    return (
        <div className="cta-buttons flex flex-col items-end">
            {buttons.map((button, index) => (
                <div key={index} className=" border-gray-200/20 mb-1">
                    <Link 
                        href={button.href} 
                        className="" 
                        
                    >
                        <Button color={pageColors.primaryColor} size='lg'>
                            {button.text}
                        </Button>
                    </Link>
                </div>
            ))} 
        </div>
    )
}