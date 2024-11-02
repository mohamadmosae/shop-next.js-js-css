import Link from "next/link"
import styles from "./Navbar.module.css"
import { MdOutlineMenu } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
export default function Navbar() {
      const {menuStatus,setMenuStatos}=useContext(MyContext)
      const openMenu=()=>{
           setMenuStatos("open")
            console.log("open");
            
      }
  return (
      <div className={styles.navbar}>
      <div className="container">
            <ul>
                  <li className="offmenu">
                  <MdOutlineMenu size="25px" onClick={()=>openMenu()}/>
                  </li>
                  <li>
                        <Link href="/"> صفحه اصلی</Link>
                  </li>
                  <li>
                        <Link href="/article">مقالات</Link>
                  </li>
                  <li>
                        <Link href="/aboute">درباره ما </Link>
                  </li>
                  <li>
                        <Link href="/contact">ارتباط با ما</Link>
                  </li>
            </ul>
      </div>
    </div>
  )
}
