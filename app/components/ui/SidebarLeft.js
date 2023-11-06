
import { getSubPages } from "@/app/sanity/sanity.query"
import NavSidebarBlock from "./NavSidebarBlock"
import BlockTitle from "./BlockTitle"

export default async function SidebarLeft({ params }) {

    const path = `/${params.slug.join('/')}`
    const basePath = path.split('/')[1] ? `/${path.split('/')[1]}` : '/'
    const pageLayout = await getSubPages(basePath)
    const basePage = pageLayout?.find(page => page.metadata.slug.current === basePath)
    const baseTitle = basePage?.metadata?.title

    console.log(pageLayout, 'pageLayout')


    return (
        <div className="sticky top-0 pt-6">
            {/* <BlockTitle title={baseTitle}  href={basePath} /> */}


            <NavSidebarBlock />
            
        </div>
    )
}

