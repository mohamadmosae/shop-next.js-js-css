import Link from "next/link"
import styles from "./Navbar.module.css"
import { MdOutlineMenu } from "react-icons/md";
export default function Navbar() {
  return (
      <div className={styles.navbar}>
      <div className="container">
            <ul>
                  <li className="offmenu">
                  <MdOutlineMenu size="25px"/>
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
