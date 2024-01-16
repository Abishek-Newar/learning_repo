import { SiNike } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
export default function Headers(){
    const Links = [
        {name:"MEN",link:"/"},
        {name:"WOMEN",link:"/"},
        {name:"KIDS",link:"/"},
        {name:"SALE",link:"/"},
        {name:"SNKRS",link:"/"}
    ]
    return <div className=" flex items-center z-10 justify-between px-20 w-full h-20 bg-transparent ">
        <div > 
            <SiNike className="text-6xl text-black" />
        </div>
        <ul className="flex font-futura  text-white font-semibold ">
            {Links.map((links)=>(
                <li>
                    <a className="px-10 py-6 transition-all duration-1000 ease-out hover:ease-in hover:border-t-4 " href={links.link}>{links.name}</a>
                </li>
            ))}
        </ul>
        <div className="flex gap-10 items-center">
            <Search />
            <div className="w-5 items-center bg-white">
            <FaShoppingCart />
            </div>
        </div>
    </div>
}