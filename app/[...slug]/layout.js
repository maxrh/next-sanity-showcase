
import SoMeSidebarBlock from "../components/ui/SoMeSidebarBlock"
import PageImage from "../components/PageImage"
import { getPageSettings } from "../sanity/sanity.query"
import SidebarLeft from "../components/ui/SidebarLeft"
import PageHeader from "../components/PageHeader"

export default async function PageLayout({ params, children }) {
    const pageLayout = await getPageSettings('/' + params.slug.join('/') ?? '/')
    const imageData = pageLayout?.content?.featuredImage

    return (
        <div className="pt-[150px]">
                
            <PageHeader params={params} imageData={imageData}/>

            {/* { currentPageData?.slideshow === true 
                ? <div className=" h-[calc(60vh-120px)] w-full relative z-10 pt-8">
                    <HeroSection id={'about'} noBottomBar/>
                </div>
                : <div className=" h-[calc(60vh-120px)] w-full relative z-10"></div>
            } */}

            
            <div className="relative z-10 px-16   border-t border-gray-200/20">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-16 
                    md:grid-cols-[170px,1fr] 
                    xl:grid-cols-[224px,auto,224px]
                    2xl:grid-cols-[224px,auto,224px] `}>
                        
                        <div className={`navigation relative hidden md:flex flex-col h-full w-full border-slate-950/50`}>
                            <SidebarLeft params={params} />
                        </div>
                        <div className="min-h-screen w-full py-14 relative"
                            style={{ color: `var(--foreground)` }}
                        >
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col h-full border-gray-950/30`}>
                            <SoMeSidebarBlock />
                            {/* <SidebarContentNav /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
