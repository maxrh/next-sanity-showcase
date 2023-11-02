import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPages() {
    return client.fetch(
        groq`*[_type == "pages"] {
            _id,
            metadata {
                description,
                title
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
            }
        }`
    )
}