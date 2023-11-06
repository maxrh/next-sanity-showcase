"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PageContext } from "../../context/PageContext"
import { useContext } from 'react'
import { SUBPAGES_QUERY, pathSanityFetcher } from "../../sanity/sanity.query"
import useSWR from 'swr'

export default function NavSidebarBlock() {
    const { currentPageData } = useContext(PageContext)
    const basePath = `/${currentPageData?.slug.split('/')[1]}`
    const { data, error } = useSWR(basePath, (path) => pathSanityFetcher({ query: SUBPAGES_QUERY, basePath: path }))
    if (error) return <div>failed to load</div>

    const subPages = data?.filter(page => page.metadata.slug.current !== basePath)

    const menuColor = currentPageData?.menuColor || 'var(--foreground-hex)'
    const primaryColor = currentPageData?.primaryColor || 'var(--primary-hex)'
    const backgroundColor = currentPageData?.backgroundColor || 'var(--background-hex)'

    return (
        <motion.div 
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ul className="flex flex-col">
                {data && data.map((item, index) => (
                    <NavItem key={index} item={item} slug={currentPageData.slug} level={0} primaryColor={primaryColor} menuColor={menuColor} backgroundColor={backgroundColor}/>
                ))}
            </ul>
        </motion.div>
    )
}

function NavItem({ item, slug, level, primaryColor, menuColor, backgroundColor }) {
    return (
        <li className="mb-1">

                <Link 
                    href={item.metadata.slug.current} 
                    className={`relative inline-flex items-center  font-semibold leading-none  h-10 px-3 pb-1 border-gray-200/10 ${slug === item.metadata.slug.current ? "" : ""}`}
                    // style={{ color: slug === item.metadata.slug.current ? primaryColor : '' }}
                    style={{ backgroundColor: primaryColor, color: backgroundColor  }}
                >
                    <span className=" shrink-0 ">{item.metadata.title}</span>
                    {/* {slug === item.metadata.slug.current && (
                        <div className="ml-6 w-full border-r-4 border-primary flex items-center" style={{ borderColor: primaryColor }}>
                            <span className={` border-b h-[5px] border-dashed border-slate-500 w-full mb-1`} />
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="24"
                                width="24"
                                viewBox="0 -960 960 960"
                                className="-ml-3"
                                style={{ fill: primaryColor }}
                            ><path d="M400-280v-400l200 200-200 200Z"/></svg>
                        </div>
                    )} */}
                </Link>


            {item.children && (
                <ul className={`ml-4`}>
                    {item.children.map((child, index) => (
                        <NavItem key={index} item={child} slug={slug} primaryColor={primaryColor} menuColor={menuColor}  backgroundColor={backgroundColor}/>
                    ))}
                </ul>
            )}

        </li>
    )
}