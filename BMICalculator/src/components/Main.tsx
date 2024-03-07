import { useState } from "react"

const Main = () => {
    const [cms,setCms] = useState<boolean>(true);
    const [bmi,setBmi] = useState(0);
    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState<number>(0);
    const [feet,setFeet] = useState(0);
    const [inches,setInches] = useState(0);
    const [gender,setGender] = useState("");
    function Calculate(){
        if(cms){
            const bmis = (weight/height) * 10000;
            setBmi(bmis);
        }
        else{
            const heights = Math.round((feet*12 + inches) * 2.54);
            const bmis = (weight/heights)* 10000;
            setBmi(bmis);
        }
    }
    function Parsing(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        const numeric = value === ''? 0:
        parseInt(value)
        return numeric;

    }
  return (
    <div className={`h-screen min-w-screen flex items-center justify-center `}>
        <div className="min-w-[600px] flex flex-col border p-10 rounded-lg gap-6 backdrop-blur-lg"> 
        <h1 className="text-center text-xl font-bold">BMI CALCULATOR</h1>
            <label className="flex gap-8" htmlFor="age">
                <h2 className="text-lg">Age:</h2>
                <input  type="radio" name="age"  id="age" value="Male" onChange={(e)=>setGender(e.target.value)} />
                <h2>Male</h2>
                <input type="radio" name="age"  id="age" value="female" onChange={(e)=>setGender(e.target.value)} />
                <h2>Female</h2> 
            </label>
            <label className="flex items-center gap-6" htmlFor="height">
                <h2 className="text-lg">Height:</h2>
                {
                    cms? 
                    <div>
                        <input className="border rounded-md w-32 h-10" type="number" id="height" placeholder="CMs" onChange={(e)=>setHeight(Parsing(e))} />
                    </div>
                    :
                    <div className="flex gap-2"> 
                        <input type="number" className="border rounded-md w-32 h-10" id="height" placeholder="FEET" onChange={(e)=>setFeet(Parsing(e))} />
                        <input type="number" className="border rounded-md w-32 h-10" placeholder="INS" onChange={(e)=>setInches(Parsing(e))} />
                    </div>
                }    
            </label>
            <button className="border rounded-md " onClick={()=>setCms(!cms)}>
                    {
                        cms?
                        "SWITCH TO FOOT": "SWITCH TO CM"
                    }
                </button>
            <label className="flex items-center gap-2" htmlFor="weight">
                <h2>Weight</h2>
            <input type="number" className="border rounded-md w-48 h-10"  id="weight" placeholder="KGs" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setWeight(Parsing(e))} />
            </label>
            <button onClick={Calculate}>Calculate</button>
            <div className="flex gap-6">
            <h1 className="text-lg font-semibold">BMI:</h1>
            <h2 className="text-lg">{bmi}</h2>
            </div>
        </div>
    </div>
  )
}

export default Main