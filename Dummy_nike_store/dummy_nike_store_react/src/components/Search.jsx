import { useState } from "react"
import { CiSearch } from "react-icons/ci" 

export default function Search(){
    const [open,SetOpen] = useState(false);
    return <div >
        <CiSearch className="absolute z-10 top-8 ml-1 " />
        {/* <h3 className={`absolute pl-5 z-10 select-none ${open ? 'hidden':'block'}`}>Search</h3> */}
        <input type="text" placeholder="Search"  className={`border-2 pl-4  rounded-3xl  w-[100px] bg-transparent focus:bg-white border-gray-700`}></input>
    </div>
}