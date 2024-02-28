import axios from 'axios';
import { useState } from 'react';

function App() {
  const[output,setOutput] = useState("");
  const[code,setCode] = useState("");
  const[language, setLanguage]  = useState("");
  const [loading,setLoading] = useState(false);


async function call(){
  setLoading(true);
  
  
 
  try {
    const response = await axios.request({
      method: 'POST',
    url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a91bc7d98emsh2f0d3cf28b93547p1675f4jsnf4dd4047fe15',
      'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    },
    data: {
      language: language,
      version: 'latest',
      code: code,
      input: null
    }
    });
    console.log(response.data);
    setOutput(response.data);
  } catch (error) {
    console.error(error);
  }
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  
}

  return (
    <div className='min-h-screen flex items-center justify-center flex-col w-screen text-sm bg-slate-500  '>
      <h1 className='text-center text-5xl mb-10'>Online Code Compiler</h1>
      <div className='min-w-[70vw] mb-4 justify-end flex'>
        <select className='w-30' onChange={(e)=>setLanguage(e.target.value)}>
          <option value="">Select</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="python3">python3</option>
          <option value="java">Java</option>
          <option value="rust">Rust</option>
          <option value="kotlin">Kotlin</option>
          <option value="swift">Swift</option>
          <option value="ruby">Ruby</option>
        </select>
      </div>
      <div className='flex items-center flex-col min-w-[70vw]   gap-4'>
      <textarea className='border mx-6  w-full h-[30vh] rounded-lg p-4' onChange={(e)=>setCode(e.target.value)} />
      <div>{output.output}</div>
      {loading? 
      <div type="button" class="bg-indigo-400 flex select-none px-2 py-1 rounded-xl items-center gap-1  mb-4 " disabled>
      <div className=" animate-spin flex items-center justify-center rounded-full w-4 h-4 bg-gradient-to-tr from-white to-slate-500">
	    <div className="h-3 w-3 rounded-full bg-indigo-400"></div>
       </div>
      <p className=' text-[10px]'>Processing...</p>
    </div>:
    <button onClick={()=>call()} className='border bg-indigo-600  text-[10px] px-6 py-1 rounded-xl mb-4'>Compile</button> 
    }
      </div>

      <div className='min-w-[70vw] border rounded-xl'>
        <div className='w-full px-6  pt-2 flex justify-between'>
          <h1>memory: {output.memory}</h1>
          <h2>language: {language}</h2>
        </div>
        <div className='p-6'>
          <h1>OUTPUT:</h1>
          <h1>{output.output}</h1>
        </div>

      </div>
    </div>
  )
}

export default App
