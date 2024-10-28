import data from "./data/data.json"
import { useEffect } from "react"
import Home from "./pages/Home";

const App = () => {

  useEffect(()=>{
    
    console.log(data);
    
  },[])
  return <>
 <Home/>
  </>
}

export default App
