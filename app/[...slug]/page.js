import Image from 'next/image'
import { getCurrentPage } from '../sanity/sanity.query'


export default async function Site() {

  return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
           <p>default page</p>
        </div>
  )
}
