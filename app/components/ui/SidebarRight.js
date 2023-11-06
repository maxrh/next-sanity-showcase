
import SocialShare from "./SocialShare"
import CTAButtons from "./CTAButtons"

export default function SidebarRight({ pageColors }) {

   


    return (
        <div className=" pt-6 flex flex-col items-end h-full">
            <CTAButtons pageColors={pageColors} />
            <SocialShare pageColors={pageColors} />
            
        </div>
    )
}