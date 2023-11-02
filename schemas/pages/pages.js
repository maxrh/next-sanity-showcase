import { DocumentsIcon } from "@sanity/icons";

export default {
    name: 'pages',
    title: 'Pages',
    icon: DocumentsIcon,
    type: 'document',
    preview: {
        select: { title: "metadata.title", subtitle: "metadata.description" },
    },
    groups: [
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
        {
          name: 'colors',
          title: 'Colors',
        },
        
    ],
    fields: [
        {
            name: "metadata",
            title: "Metadata",
            type: "pageMeta",
            group: 'seo',
            validation: (rule) => rule.required(),
        },
        {
            name: "content",
            title: "Content",
            type: "page",
            group: 'content',
        },
        
        {
            name: "pageColors",
            title: "Page colors",
            type: "pageColors",
            group: 'colors',
        },
    ],
}