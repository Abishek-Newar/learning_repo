import { useLocation,useNavigate  } from "react-router-dom"

export default function Home(){
    const location = useLocation()
    return <div className="homepage">
        <h1>HELLO ! {location.state.id} and welcome</h1>
    </div>
}