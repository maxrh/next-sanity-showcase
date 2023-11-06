import { groq } from "next-sanity";
import client from "./sanity.client";

export const sanityFetcher = async (query) => {
    const response = await client.fetch(query)
    return response
}

export const pathSanityFetcher = async ({ query, basePath }) => {
    const response = await client.fetch(query, { basePath })
    return response;
}

// fetch subpages for menu, item with basepath should be first

export const SUBPAGES_QUERY = groq`
  *[_type == "pages" && metadata.slug.current match $basePath] {
        metadata {
            title,
            slug { 
                current
            }
        },
    } | order(metadata.slug.current asc)
`;

export const MENU_ITEMS_QUERY = groq`*[_type == "pages" && pageSettings.showInMenu == true] {
    metadata {
        title,
        slug { 
            current
        }
    },
    pageColors {
        themeselector,
        menuColor { hex },
        primaryColor { hex },
        backgroundColor { hex },
    },
}`

export const PAGE_LAYOUT_QUERY = groq`*[_type == "pages"] {
    metadata {
        title,
        slug { 
            current
        }
    },
    pageColors {
        themeselector,
        menuColor { hex },
        primaryColor { hex },
        backgroundColor { hex },
    },
    content {
        header,
        featuredImage {
            alt,
            "imageUrl": asset->url
        }
    },
}`



export async function getPages() {
    return client.fetch(
        groq`*[_type == "pages"] {
            metadata {
                description,
                title,
                path { 
                    current
                }
            },
            content {
                header,
                featuredImage {
                    alt,
                    "imageUrl": asset->url
                }
            },
            pageColors {
                themeselector,
                menuColor { hex },
                primaryColor { hex },
                backgroundColor { hex },
            },
            pageSettings {
                showInMenu,
                pageLayout
            }
        }`
    )
}



export async function getMenuItems() {
    return client.fetch(
        groq`*[_type == "pages" && pageSettings.showInMenu == true] {
            metadata {
                title,
                slug { 
                    current
                }
            },
            pageColors {
                themeselector,
                menuColor { hex },
                primaryColor { hex },
                backgroundColor { hex },
            },
        }`
    )
}

export async function getPage(slug) {
    return await client.fetch(
        groq`*[_type == "pages" && metadata.slug.current == "${slug}"][0]`, { cache: 'no-store' })
}

export async function getPageSettings(slug) {
    return await client.fetch(
        groq`*[_type == "pages" && metadata.slug.current == "${slug}"][0] {
            content {
                header,
                featuredImage {
                    alt,
                    "imageUrl": asset->url
                }
            },
            pageSettings {
                showInMenu,
                pageLayout
            },
            pageColors {
                themeselector,
                menuColor { hex },
                primaryColor { hex },
                backgroundColor { hex },
            },
        }`, { cache: 'no-store' })
}

export async function getSubPages(slug) {
    return client.fetch(
        groq`*[_type == "pages" && metadata.slug.current match "${slug}"] {
            metadata {
                title,
                slug { 
                    current
                }
            },
        }`, { cache: 'no-store' })
}