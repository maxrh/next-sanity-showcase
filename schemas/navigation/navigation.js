import { SchemaIcon } from "@sanity/icons"

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: SchemaIcon,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
          },
          {
            name: 'navId',
            type: 'slug',
            title: "Navigation Id"
          }         
    ]
}