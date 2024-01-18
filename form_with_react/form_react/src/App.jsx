import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
