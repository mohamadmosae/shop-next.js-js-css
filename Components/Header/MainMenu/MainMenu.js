import Link from "next/link";
import styles from "./MainMenu.module.css";
import { FaAngleDown } from "react-icons/fa6";
export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <div className="container">
<ul>

<li>
          <Link href="/products/laptop">لپ تاپ</Link>
          <FaAngleDown />
        </li>

        <li>
          <Link href="/products/phone">موبایل</Link>
          <FaAngleDown />
        </li>
        <li>
          <Link href="/products/tablet">تبلت</Link>
          <FaAngleDown />
        </li>

        <li>
          <Link href="/products/camera">دوربین</Link>
          <FaAngleDown />
        </li>

        <li>
          <Link href="/products/console">کنسول و بازی</Link>
          <FaAngleDown />
        </li>
</ul>
      </div>
    </div>
  );
}
