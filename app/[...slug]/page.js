import client from "../sanity/sanity.client"
import clsx from "clsx"
import { getPage } from "../sanity/sanity.query"
import { groq } from "next-sanity"
import { PortableText } from '@portabletext/react'
import PortableTextRenderer from "../components/portableText/PortableTextRenderer"

export default async function Page({ params }) {

    const pageData = await getPage('/' + params.slug.join('/'))
    const pageTheme = pageData.pageColors.themeselector

    return (
        <div className={clsx(`prose ${pageTheme === 'dark' ? 'prose-invert': ''} lg:prose-lg prose-headings:font-bold prose-p:font-light min-h-screen max-w-none w-full`)}>
            
            <h1 className={clsx("pt-3")}>{pageData.content?.header ?? "Heading"}</h1>

            { pageData.content?.body &&

                <PortableText
                    components={PortableTextRenderer}
                    value={pageData.content?.body}
                />
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

    const paramsArray = data.map(item => {
        const segments = item.slug.split('/').filter(Boolean)
        return { slug: segments }
    })

    return paramsArray
}