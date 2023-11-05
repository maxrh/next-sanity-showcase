
import clsx from "clsx"
import { getImageDimensions } from "@sanity/asset-utils"
import sanityBaseUrl from "@/app/sanity/sanityBaseUrl"
import Image from "next/image"
import { z } from "zod"

const imageSchema = z.object({
    _key: z.string(),
    _type: z.literal("embeddedImage"),
    imageCaption: z.string().optional(),
    imageDescription: z.string().optional(),
    fullWidth: z.boolean().optional(),
    imageFile: z.object({
        _type: z.literal("image"),
        asset: z.object({
            _ref: z.string(),
            _type: z.literal("reference"),
        }),
    }),
})

const transformRefToFilename = (ref) => {
    const formats = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    for (let format of formats) {
        if (ref.endsWith(`-${format}`)) {
            return ref.replace('image-', '').replace(`-${format}`, `.${format}`)
        }
    }
    return ref;  // Return original ref if no format matches
}

const constructImageUrl = (imageRef) => {
    const filename = transformRefToFilename(imageRef.asset._ref)
    return `${sanityBaseUrl}/${filename}`
}

const ImageRenderer = ({ image }) => {
    const imageUrl = constructImageUrl(image.imageFile);  // Use the imported client
    const { width, height } = getImageDimensions(image.imageFile)

    console.log(image.fullWidth, 'image.fullWidth');

    return (
        <figure className={clsx(image.fullWidth ? "2xl:py-8" : "max-w-screen-md w-full mx-auto")}>
            <Image
                src={imageUrl}  // Use the constructed URL
                alt={image.imageDescription || ""}
                loading="lazy"
                width={width}
                height={height}
                style={{ aspectRatio: width / height }}
            />
            {image.imageCaption && (
                <figcaption>{image.imageCaption}</figcaption>
            )}
        </figure>
    )
}

const ImageComponent = ({ value }) => {
    const parsedImageResult = imageSchema.safeParse(value);
    if (!parsedImageResult.success) {
        console.error("Image object did not match schema", {
            cause: parsedImageResult.error,
        })
        return <span className="text-danger">Please specify a valid image</span>;
    }
    return (
        <ImageRenderer image={parsedImageResult.data} />
    )
}
  

export default ImageComponent