import Link from "next/link";
import styles from "./MainMenu.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
export default function MainMenu() {
  const [showsub,setshowsub]=useState(false)





  return (
    <div className={styles.menu}>
      <div className="container">
        <ul>
          <li onMouseEnter={()=>setshowsub(true)}
            onMouseLeave={()=>setshowsub(false)}>
            <Link href="/products/laptops">لپ تاپ</Link>
            <FaAngleDown />
      {
        showsub && <SubMenu/>
      }
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
      </div>
    </div>
  );
}
