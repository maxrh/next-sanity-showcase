import Image from 'next/image'
import { getPages } from '../sanity/sanity.query'


export default async function Site() {
  const pages = await getPages()

  return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
           <p>default page</p>
        </div>
  )
}
