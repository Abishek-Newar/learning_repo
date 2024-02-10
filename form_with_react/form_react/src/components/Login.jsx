import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function Login(){

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function submit(e){
        e.preventDefault();
        
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    navigate('/home',{state:{id:email}})
                }else if(res.data=="notexist"){
                    alert("User not found");
                }
            })
            .catch(e=>{
                alert("wrong details");
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }


    return <div className="login">
        <h1>Login</h1>
        <form action="POST">
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="Email" id="Email"/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" id="password"/>
            <input type="submit" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/signup">SignUp</Link>
    </div>
}