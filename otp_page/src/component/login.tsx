import { useNavigate } from "react-router-dom"


export default function Login() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/otp");
    }

    return <div className="w-full h-screen bg-sky-400 flex items-center justify-center">
        <form className=" w-80 flex  flex-col items-center justify-center " >
            <h1>Sign In</h1>
            <div className="flex flex-col items-center justify-center gap-4">
                <input type="number" className="w-full" />
                <button onClick={handleClick} className="bg-white ">submit</button>
            </div>
        </form>
    </div>
}