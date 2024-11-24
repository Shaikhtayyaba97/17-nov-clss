import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"


export default function shad(){
    return(
        <div>
            <h1 className="p-2 m-3 text-center text-base sm:text-lg md:text-xl lg:text-2xl ">There is a shahcn button feel free to click on it for navigation into grid page</h1>
        <div className="m-2 p-2">
            
            <Button  variant="destructive"><Link href="/grid">Click me</Link>
            </Button>
            
        </div></div>
    )
}
