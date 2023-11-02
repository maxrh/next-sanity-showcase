import Image from 'next/image'
import { getPages } from './sanity/sanity.query'


export default async function Home() {
  const pages = await getPages()

  return (
      <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
            {/* <motion.div 
                key={heroId}
                className={`hero-style absolute top-0 left-0 w-full h-screen -z-50`} 
                initial={{ opacity: 1, backgroundColor: prevColorRef.current  }}
                animate={{ opacity: 1, backgroundColor: heroColor }}   
                transition={{ duration: 1 }}  

            ></motion.div> */}

                <div className="flex flex-col items-center w-full">
                    <div className='h-[calc(100vh-120px)] w-full relative py-8'>
                        {/* <HeroSection id={'frontpage'} handleHeroColor={handleHeroColor} /> */}
                        
                    </div>
                    <span className='block h-4 w-full striped-bg-gray'></span>

                    {/* <PagesSection /> */}
                    {/* <NewsSection /> */}
                    {/* <ProgramSection /> */}
                </div>
        </div>
  )
}
