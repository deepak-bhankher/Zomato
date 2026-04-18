 import React, { useEffect } from "react";
import Home from "./components/Home";
import AOS from "aos"
import "aos/dist/aos.css";

 function App () {
  useEffect(()=>{
    AOS.init({
      duration:800,
      offset:50,
      easing:'ease-out',
      once:true,
    })

  },[])
  return (
    <>
    <Home/>
    </>
  )
 }

 export default App;