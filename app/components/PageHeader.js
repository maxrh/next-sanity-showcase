import Link from "next/link"
import Image from "next/image"
import LogoSvg from "./ui/LogoSvg"
import PageImage from "./PageImage"

export default function PageHeader({ imageData }) {

    return (

        <>
            { imageData && <PageImage imageData={imageData}/> }

            <div className="page-header h-[calc(60vh-120px)] w-full relative z-10">



            </div>
        </>

    )
}