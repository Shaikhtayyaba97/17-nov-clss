import Link from "next/link"
import { IoHomeSharp } from "react-icons/io5"
export default function Header(){
    return(
        <div className="flex justify-between  bg-zinc-300 p-3 m-auto">
            <div className=""> < IoHomeSharp className=" h-6 w-11" /> 
            </div>
            <ul className=" flex flex-row gap-4">
                <li><Link href="/">  Home</Link></li>
                <li><Link href="/grid" >Grid</Link></li>
                <li><Link href="/shah">button</Link></li>
            </ul>
        </div>
    )
}