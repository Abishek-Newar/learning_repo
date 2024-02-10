import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./component/login"
import Otp from "./component/otp"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
