import { FaInstagram } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>مقداد آی تی</h4>
              <ul>
                <li>گواهینامه‌ها و مجوز ها</li>
                <li>قوانین و مقررات</li>
                <li>حریم خصوصی</li>
                <li>گارانتی در مقداد ای تی</li>
                <li>گارانتی لپ تاپ</li>
                <li>تماس با ما</li>
                <li>استخدام</li>
                <li> درباره ما</li>
              </ul>
            </div>
            <div className="col">
              <h4> راهنما </h4>
              <ul>
                <li> تضمین اصالت کالا </li>
                <li> شرایط عودت کالا </li>
                <li>حریم خصوصی</li>
                <li> نحوه ارسال کالا </li>
                <li>گارانتی لپ تاپ</li>
                <li> تخفیف‌ها </li>
              </ul>
            </div>
            <div className="col">
              <h4>  مطالب مفید   </h4>
              <ul>
                <li>   قیمت گوشی سامسونگ      </li>
                <li>   قیمت گوشی شیائومی  </li>
                <li>   خرید و لیست قیمت روز گوشی</li>
                <li>   قیمت گوشی موبایل      </li>
                <li>   قیمت لپ تاپ  </li>
                <li>   قیمت کارت گرافیک  </li>
                <li>قیمت ساعت هوشمند</li>
                <li>   برندها  </li>
                <li>    لیست بهترین های تکنولوژی</li>
              </ul>
            </div>
            <div className={`col ${styles.sosials}`}>
              <ul>
                <li><FaInstagram size="
                30px"/></li>
                <li><FaXTwitter size="
                30px"/></li>
                <li><FaTelegram size="
                30px"/></li>
                <li><FaLinkedinIn size="
                30px"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









