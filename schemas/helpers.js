import slugify from "slugify"

function formatSlug(input, slugStart) {
    const slug = slugify(input, { lower: true })
    return slugStart + slug
}

export function slugWithType(prefix = ``, source = `metadata.title`) {
    const slugStart = prefix ? `/${prefix}/` : `/`

    return {
        name: `slug`,
        type: `slug`,
        description: "The path to this page. Example: /about or /about/contact ",
        options: {
            source,
            slugify: (value) => formatSlug(value, slugStart),
        },
        validation: (Rule) => Rule.required().custom((param) => {
            const current = param && param.current
        
            if (typeof current === "undefined") {
                return true
            }
        
            if (current) {
                if (!current.startsWith(slugStart)) {
                    return `Slug must begin with "${slugStart}". Click "Generate" to reset.`
                }
        
                // if (current.slice(slugStart.length).split("").includes("/")) {
                //     return `Slug cannot have another "/" after "${slugStart}"`
                // }
        
                if (current === slugStart) {
                    return `Slug cannot be empty`
                }
        
                if (current.endsWith("/")) {
                    return `Slug cannot end with "/"`
                }
            }
        
            return true
        }),
        
    }
}