import clsx from "clsx"
import FileComponent from "./FileComponent"
import ImageComponent from "./ImageComponent"
import FileLink from "./FileLink"
import UrlLink from "./UrlLink"

const PortableTextRenderer = {
    types: {
        embeddedImage: ImageComponent,
        embeddedFile: FileComponent,
    },
    block: {
        blockquote: ({ children }) => (
            <blockquote className={clsx("blockquote")}>{children}</blockquote>
        ),
    },
    marks: {
        em: ({ children }) => <em>{children}</em>,
        strong: ({ children }) => <strong>{children}</strong>,
        u: ({ children }) => <u>{children}</u>,
        code: ({ children }) => <code>{children}</code>,
        urlLink: UrlLink,
        fileLink: FileLink,
    },
    list: {
        bullet: ({ children }) => <ul>{children}</ul>,
        number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
        number: ({ children }) => <li>{children}</li>,
    },
};



export default PortableTextRenderer