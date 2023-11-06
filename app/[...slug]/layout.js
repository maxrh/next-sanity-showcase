
import SoMeSidebarBlock from "../components/ui/SoMeSidebarBlock"
import PageImage from "../components/PageImage"
import { getPageSettings } from "../sanity/sanity.query"
import SidebarLeft from "../components/ui/SidebarLeft"
import PageHeader from "../components/PageHeader"
import HeaderBar from "../components/ui/HeaderBar"
import SidebarRight from "../components/ui/SidebarRight"
import Breadcrumb from "../components/ui/Breadcrumb"

export default async function PageLayout({ params, children }) {
    const pageLayout = await getPageSettings('/' + params.slug.join('/') ?? '/')
    const imageData = pageLayout?.content?.featuredImage

    const pageColors = {
        primaryColor: pageLayout?.pageColors?.primaryColor?.hex || 'var(--primary-hex)',
        menuColor: pageLayout?.pageColors?.menuColor?.hex || 'var(--foreground-hex)',
        backgroundColor: pageLayout?.pageColors?.backgroundColor?.hex || 'var(--background-hex)'
    }

    return (
        <div className="pt-[150px]">
                
            <PageHeader params={params} imageData={imageData}/>

            {/* { currentPageData?.slideshow === true 
                ? <div className=" h-[calc(60vh-120px)] w-full relative z-10 pt-8">
                    <HeroSection id={'about'} noBottomBar/>
                </div>
                : <div className=" h-[calc(60vh-120px)] w-full relative z-10"></div>
            } */}

            {/* <HeaderBar pageColors={pageColors}/> */}

            <div className="relative z-10 px-16   border-gray-200/20">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full  
                    md:grid-cols-[170px,1fr] 
                    xl:grid-cols-[250px,auto,224px]
                    2xl:grid-cols-[250px,auto,224px] `}>
                        
                        <div className={`navigation relative hidden md:flex flex-col h-full w-full border-slate-950/50`}>
                            <SidebarLeft params={params} />
                        </div>
                        <div className="min-h-screen w-full relative py-6"
                            style={{ color: `var(--foreground)` }}
                        >
                            {/* <div className="max-w-screen-md mx-auto mb-8 text-sm"><Breadcrumb /></div> */}
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col pl-8 h-full`}>
                            <SidebarRight  pageColors={pageColors} />
                            {/* <SoMeSidebarBlock /> */}
                            {/* <SidebarContentNav /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
