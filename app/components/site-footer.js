import Link from "next/link"
import Image from "next/image"
import LogoSvg from "./ui/logoSvg"

export default function SiteFooter() {

    return (
        <div className="page-footer px-24 py-16 h-[600px] bg-background">
            <div className="h-full flex items-end">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-52 h-10 -ml-2"><LogoSvg /></Link>
                </div>
            </div>
        </div>
    )
}