
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import OffCanvasMenu from "@/Components/OffCanvasMenu/OffCanvasMenu";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const MyContext=createContext()

export default function App({ Component, pageProps }) {
  const [menuStatus,setMenuStatos]=useState("close")
  
const route=useRouter()
console.log(route);
useEffect(()=>{
setMenuStatos("close")
},[route.asPath])

  return<MyContext.Provider value={{menuStatus,setMenuStatos}}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
<OffCanvasMenu/>
  </MyContext.Provider>
}
