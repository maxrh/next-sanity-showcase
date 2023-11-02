import { DocumentsIcon } from "@sanity/icons";

export default {
    name: "pageSettings",
    title: "Page Settings",
    icon: DocumentsIcon,
    type: "object",
    initialValue: {
        showInMenu: false
    },
    fields: [
        {
            name: "showInMenu",
            title: "Show in menu",
            description: "Show this page in the menu",
            type: "boolean",
            
        },
        {
            name: "pageLayout",
            title: "Page Layout",
            description: "Choose the layout for this page",
            type: "string",
            initialValue: 'default',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Full width', value: 'fullWidth' },
                    { title: 'Centered', value: 'centered' },

                ],
            },
            
        },
    
    ],

  }
  