"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { SUBPAGES_QUERY, pathSanityFetcher } from "../../sanity/sanity.query"
import useSWR from 'swr'
import Link from 'next/link'

const Breadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    const basePath = `/${paths.split('/')[1]}`

    const { data, error } = useSWR(basePath, (path) => pathSanityFetcher({ query: SUBPAGES_QUERY, basePath: path }))
    if (error) return <div>failed to load</div>

    const getTitleForSlug = (slug) => {
        const page = data.find(p => p.metadata.slug.current === slug);
        return page ? page.metadata.title : slug;
    }


    return (
        <div>
            <ul className={`flex items-center`}>
                { data &&
                    pathNames.map((item, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? `` : ''
                        let itemTitle = getTitleForSlug(href)
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>
                                    <Link href={href}>{itemTitle}</Link>
                                </li>
                                {pathNames.length !== index + 1 && 
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        height="24"
                                        width="24"
                                        viewBox="0 -960 960 960" 
                                        className='fill-primary'
                                    ><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumb
