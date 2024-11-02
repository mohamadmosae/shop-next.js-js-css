import Link from "next/link";
import styles from "./SubMenu.module.css";

export default function SubMenu() {
  return (
    <div className={styles.submenu}>
      <div className="container">
        <ul>
          <li>
            <Link href="/products/laptops/asus">asus</Link>
          </li>
          <li>
            <Link href="/products/laptops/hp">hp</Link>
          </li>
          <li>
            <Link href="/products/laptops/dell">dell</Link>
          </li>
          <li>
            <Link href="/products/laptops/apple">apple</Link>
          </li>
          <li>
            <Link href="/products/laptops/msi">msi</Link>
          </li>
          <li>
            <Link href="/products/laptops/microsoft">microsoft</Link>
          </li>
          <li>
            <Link href="/products/laptops/microsoft">samsung</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
