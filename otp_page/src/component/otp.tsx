import { useEffect, useRef, useState } from "react"


export default function  Otp({length = 4}) {
    const [otp,setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    console.log(inputRefs);
    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])
    function handleChange(index:number,e:any){
        e.preventDefault();
        const value = e.target.value;
        const newOtp = [...otp]

        newOtp[index] = value.substring(value.length -1);

        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        console.log(combinedOtp);
        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }

    }
    function handleClick(index:number){
        inputRefs.current[index].setSelectionRange()
    }
    function handleKeyDown(index:number,e:any){
        if(e.key === "Backspace"
        && !otp[index] 
        && index>0
        && inputRefs.current[index-1]
        ){
            inputRefs.current[index-1].focus()
        }
    }

    return <div className="w-full flex gap-4 items-center justify-center">
        {
            otp.map((otps,index)=>(
                <input
                 className="border flex w-14 h-14"
                 ref= {(input) => (inputRefs.current[index] = input)}
                 key = {index}
                 onChange={(e)=>handleChange(index,e)}
                 onClick={()=>handleClick(index)}
                 onKeyDown={(e)=>handleKeyDown(index,e)}
                 value={otps}
                 type="number" />
            ))
        }
    </div>
}