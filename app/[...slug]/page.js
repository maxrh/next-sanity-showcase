import client from "../sanity/sanity.client"
import clsx from "clsx"
import { getPage } from "../sanity/sanity.query"
import { groq } from "next-sanity"
import { PortableText } from '@portabletext/react'
import PortableTextRenderer from "../components/portableText/PortableTextRenderer"

export default async function Page({ params }) {

    const pageData = await getPage('/' + params.slug.join('/'))
    const pageTheme = pageData.pageColors.themeselector

    const pageColors = {
        primaryColor: pageData?.pageColors?.primaryColor?.hex || 'var(--primary-hex)',
        menuColor: pageData?.pageColors?.menuColor?.hex || 'var(--foreground-hex)',
        backgroundColor: pageData?.pageColors?.backgroundColor?.hex || 'var(--background-hex)'
    }

    // get first letter of pageData.content?.header

    const firstLetter = pageData.content?.header?.charAt(0)

    return (
        <div className={clsx(`prose ${pageTheme === 'dark' ? 'prose-invert': ''} lg:prose-lg prose-headings:font-bold first:prose-headings:text-8xl prose-p:font-light min-h-screen max-w-none w-full`)}>
            
        
            <h1 className={clsx(`relative first-letter:text-background indent-3`)}>
            { pageData.content?.header ?? "Heading" }
            { firstLetter && 
                <span 
                className="absolute -top-1 -left-0 px-0 pt-1  pb-2 pr-3 -z-10"
                style={{ backgroundColor: pageColors.primaryColor, color: pageColors.primaryColor }}
            >{firstLetter}</span> }
            </h1>

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
        }`, { cache: 'no-store' }
    )

    const paramsArray = data.map(item => {
        const segments = item.slug.split('/').filter(Boolean)
        return { slug: segments }
    })

    return paramsArray
}