
import Link from "next/link"
import LogoSvg from "./ui/LogoSvg"
import MainNav from "./ui/MainNav"

export default function SiteHeader() {
   

    return (
        <header className="px-16 pt-[60px] pb-5 flex flex-col items-center absolute top-0 left-0 w-full z-50  ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-52 h-10 -ml-2"><LogoSvg /></Link>
                </div>
                
                <MainNav /> 
            </div>
        </header>
    )
}
