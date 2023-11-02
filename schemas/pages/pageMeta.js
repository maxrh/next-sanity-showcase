import { DocumentsIcon } from "@sanity/icons"
import { slugWithType } from "../helpers"

export default {
    name: "pageMeta",
    title: "Page Metadata",
    icon: DocumentsIcon,
    type: "object",
    preview: { select: { title: "title", subtitle: "description" } },
    fields: [
        {
            name: "title",
            title: "Page Title",
            description: "Appears in the browser tab and search results.",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "description",
            description: "Appears in search results.",
            title: "Description",
            type: "string",
            validation: (rule) => rule.max(155),
        },
        slugWithType(``, `metadata.title`),
    ],
  }
  

