import { useState } from "react";
import { IoMenu,  IoClose  } from "react-icons/io5";

export default function Headers() {
    let Links = [
        {name:"HOME",link:"/"},
        {name:"About",link:"/"},
        {name:"Contact",link:"/"}
    ];

    const [open,setOpen] = useState(false);
    return <div className="shadow-md w-full fixed bg-sky-200 top-0 left-0 select-none">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-7 px-10">
            <div className=" font-extrabold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                Abishek
            </div>
            <div onClick={()=>setOpen(!open)} className="absolute right-7 top-4 text-3xl md:hidden" >
            {open ? <IoClose /> : <IoMenu /> }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open? 'top-15 opacity-100' : 'top-[-490px] opacity-0'} md:opacity-100 `}> 
                {Links.map((link)=>(
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <a href={link.link}>{link.name}</a>
                    </li>
                )
                )}
            </ul>
        </div>
    </div>
}