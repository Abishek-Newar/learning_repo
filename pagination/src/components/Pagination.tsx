import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react"


const Pagination = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    async function call() {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const res = await response.json();
        setData(res.products);
        setLoading(false);
    }
    useEffect(()=>{
        call();
    },[])
    const total = (Math.ceil(data.length/10))
    function handleLeft(){
        if(page > 1){
            setPage( page -1);
        }
    }
    function handleRight(){
        if(page < total){
            setPage(page + 1);
        }
    }
    
  return (
    <div className="flex flex-col items-center gap-6">
    <div className="text-6xl font-serif font-bold">Pagination</div>
     <div className="flex flex-wrap gap-4 ">
        {
            data.map((item:any,index)=>(
                <div key={index} className={`${(index+1 > page*10 || ((page-1)*10 > index))? " hidden" : "block"} object-fill w-96 h-96 border p-4`} >
                    <img src={item.thumbnail} className={`  object-fill h-48 w-96  `} alt="" />
                    <p>{item.name}</p>
                </div>
            ))
        }
     </div>
    <div className="flex gap-2">
        <AiOutlineArrowLeft onClick={handleLeft} className="cursor-pointer w-12 h-12 rounded-lg p-3 flex items-center justify-center border" />
    {
        [...Array(total)].map((_,index)=>(
            <div   className={` cursor-pointer w-12 h-12 rounded-lg flex items-center justify-center border`} onClick={()=>setPage(index+1)}  key={index}>{index+1}</div>
        ))
    }
    <AiOutlineArrowRight onClick={handleRight} className="cursor-pointer w-12 h-12 rounded-lg p-3 flex items-center justify-center border" />
    </div>
    </div>

  )
}

export default Pagination