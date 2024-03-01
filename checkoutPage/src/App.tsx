import React from "react"
import Stepper from "./components/Stepper"
interface steps {
  name: string,
  component: React.FC
}

function App() {
  const stepInfo:steps[] = [{
    name: "Customer Info",
    component: ()=><div>Provide your details</div>
  },{
    name: "Shipping Info",
    component: ()=><div>Provide your address</div>
  },{
    name: "Payment",
    component: ()=><div>Enter your Card details</div>
  },{
    name: "Delivered",
    component: ()=><div>Delivered</div>
  }]

  return (
    <>
      <Stepper data= {stepInfo} />
    </>
  )
}

export default App
