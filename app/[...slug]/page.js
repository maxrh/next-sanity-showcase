import client from "../sanity/sanity.client"
import { getCurrentPage } from "../sanity/sanity.query"
import { groq } from "next-sanity"

export default async function Page({ params }) {
    const pageData = await getCurrentPage('/' + params.slug.join('/'))


    return (
        <div className={`flex flex-col items-center justify-between min-h-screen w-full pt-[120px]`}>
            {pageData &&  
                <p>{pageData.metadata.title}</p> 
            }
        </div>
    )
}

export async function generateStaticParams() {
    const data = await client.fetch(
        groq`*[_type == "pages" && defined(metadata.slug.current)]{
            "slug": metadata.slug.current
        }`
    )

    // console.log(data, 'data');

    const paramsArray = data.map(item => {
        const segments = item.slug.split('/').filter(Boolean)
        return { slug: segments }
    })

    return paramsArray
}