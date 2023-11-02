import { groq } from "next-sanity";
import client from "./sanity.client";

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

export async function getCurrentPage( slug ) {
    return client.fetch(
        groq`*[_type == "pages" && metadata.path.current == '/hello-world-again-again-again']
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