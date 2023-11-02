import { SchemaIcon } from "@sanity/icons"

export default {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    icon: SchemaIcon,
    fields: [
        {
            name: "text",
            type: "string",
            title: "Navigation Text"
          },
          {
            name: "navigationItemUrl",
            type: "link", 
            title: "Navigation Item URL"
          }
    ]
}