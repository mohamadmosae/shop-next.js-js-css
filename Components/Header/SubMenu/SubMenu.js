import Link from "next/link";
import styles from "./SubMenu.module.css";

export default function SubMenu() {
  return (
    <div className={styles.submenu}>
      <div className="container">
        <ul>
          <li>
            <Link href="/products/laptop/asus">asus</Link>
          </li>
          <li>
            <Link href="/products/laptop/hp">hp</Link>
          </li>
          <li>
            <Link href="/products/laptop/dell">dell</Link>
          </li>
          <li>
            <Link href="/products/laptop/apple">apple</Link>
          </li>
          <li>
            <Link href="/products/laptop/msi">msi</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
