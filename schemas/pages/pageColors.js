import { ColorWheelIcon } from '@sanity/icons'

export default {
    name: "pageColors",
    title: "Page Colors",
    icon: ColorWheelIcon,
    type: "object",
    fields: [
        {
            name: 'themeselector',
            type: 'string',
            title: 'Theme',
            initialValue: 'dark',
            options: {
                list: [
                  { title: 'Light', value: 'light' },
                  { title: 'Dark', value: 'dark' },
                ],
              },
        },
        {
            name: 'menuColor',
            title: 'Menu color',
            type: 'color',
            options: {
                disableAlpha: true,
                colorList: [
                    { hex: '#111827' },
                    { hex: '#f3f4f6' },
                    { hex: '#6ee7b7' },
                    { hex: '#fcd34d' },
                    { hex: '#67e8f9' },
                    { hex: '#fda4af' },
                ]
            }
        },
        {
            name: 'primaryColor',
            title: 'Primary color',
            type: 'color',
            options: {
                disableAlpha: true,
                colorList: [
                    { hex: '#6ee7b7' },
                    { hex: '#fcd34d' },
                    { hex: '#67e8f9' },
                    { hex: '#fda4af' },
                ]
            }
        },
        {
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color',
            options: {
                disableAlpha: true,
                colorList: [
                    { hex: '#0f172a' },
                    { hex: '#022c22' },
                    { hex: '#1e1b4b' },
                    { hex: '#4a044e' },
                ]
            }
        },
    ],
}
  