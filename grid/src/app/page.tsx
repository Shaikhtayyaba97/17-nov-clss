import Image from "next/image"
export default function Home(){
  return(
    <div>
      <Image className="w-full h-full sm:h-96 md:h-[500px] lg:h-[600px]" src="home.jpg" alt="home cover picture" />
    </div>
  )
}