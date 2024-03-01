import React, { useState } from "react"
import { MdDone } from "react-icons/md";
interface steps {
    name: string,
    component: React.FC
}
interface StepperProps {
    data: steps[];
  }
const Stepper = ({data}:StepperProps) => {
    const [position,setPosition] = useState(0);
    const[percentage,setPercentage] = useState(0); 
    const[page,setPage] = useState(0); 
    const Pages = data[page].component;                   
    function handleClick(){
        setPosition(position+1)
        if(percentage <99){
            setPercentage(percentage +33.33); 
            
        }
        if(page < data.length-1){
            setPage(page + 1)
        }
    }
        console.log(page)
  return (
    <div className="w-full mt-20">
        <div className="flex justify-between  my-0 mx-auto w-[80%] mb-10">
        <div className="w-[76%] absolute h-3 top-[95px] left-[12%] bg-slate-300"><div className="bg-green-400 h-full" style={{width: `${percentage}%`}}></div></div>
        {
            
            data.map((item,index)=>(
                <div onClick={()=>{position < index+1?  null: setPage(index)  }} className="flex flex-col cursor-pointer items-center z-10" key={index}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${position < index+1?  `bg-slate-500`: "bg-green-400"  }`}>{position < index+1?  `${index + 1}`: <MdDone/>  }</div>
                <div className="text-[8px] sm:text-xs">{item.name}</div>
                </div>
            ))
        }
    </div>
    <div className="w-full flex justify-center mb-6"><Pages /></div>
     <div className="w-full"> <button className="border px-3 flex rounded-xl mx-auto my-0 py-1" disabled = {page < data.length? false : true} onClick={handleClick}>{page   < data.length-1? "Next": "Finish"}</button></div>
    </div>
  )
}

export default Stepper