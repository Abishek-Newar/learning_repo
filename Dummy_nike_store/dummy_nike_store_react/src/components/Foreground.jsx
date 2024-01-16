import nike from './../assets/nike.png'

export default function Foreground(){
    return <div className=" ">
        <div className="absolute font-futura text-[5vw]  text-white w-40 top-[13vw] left-10 ">JUST DO IT.</div>
        <div className="absolute left-[30vw] rotate-[-15deg] top-0 w-[50vw]  "><img className='w-[40vw]' src= {nike} alt="" /></div>
    </div>
}