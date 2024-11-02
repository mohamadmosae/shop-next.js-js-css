import Link from "next/link"
import styles from "./OffCanvasMenu.module.css"
import { IoIosClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useContext, useState } from "react";
import { MyContext } from "@/pages/_app";
export default function OffCanvasMenu() {
  const {menuStatus,setMenuStatos}=useContext(MyContext)
  const closehandler=()=>{
   setMenuStatos("close")
  }
  return (
 <>
 <aside className={menuStatus==="open"?`${styles.offcanvasmenu}`:"close"}>
  <div className={styles.offcanvasheader}>
    <p>فروشگاه ملورین</p>
    <IoIosClose  size='20px' onClick={closehandler}/>
  </div>
  <ul>
          <li>
            <Link href="/products/laptops">لپ تاپ</Link>
            <FaAngleDown />
          </li>

          <li>
            <Link href="/products/mobiles">موبایل</Link>
            <FaAngleDown />
          </li>
          <li>
            <Link href="/products/tablets">تبلت</Link>
            <FaAngleDown />
          </li>

          <li>
            <Link href="/products/cameras">دوربین</Link>
            <FaAngleDown />
          </li>

          <li>
            <Link href="/products/consoles">کنسول و بازی</Link>
            <FaAngleDown />
          </li>
        </ul>
 </aside>
 </>
  )
}
