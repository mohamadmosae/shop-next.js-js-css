import styles from "../../styles/Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
<HiOutlineMail />;
export default function ContactPage() {
  return (
    <div className="container">
      <div className={styles.contactcontainer}>
        <h4>پیگیری سفارش، انتقاد و پیشنهاد</h4>
        <p>
          برای پیگیری یا سؤال درباره سفارش و ارسال پیام بهتر است از فرم زیر
          استفاده کنید.
        </p>
        <form className={styles.form}>
          <div className={styles.inputbox}>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="phone"> شماره تلفن </label>
            <input type="text" is="phone" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="email"> ایمیل </label>
            <input type="text" id="email" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="number"> شماره سفارش </label>
            <input type="text" id="number" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="message"> متن پیام</label>
            <textarea name="" id="message"></textarea>
          </div>
        </form>
      </div>
      <div className={styles.information}>
        <p>
          <FaPhoneAlt color="#676767" size="20px" /> <span>تلفن فروش</span>: 45691000 - داخلی2 <b>|</b> <span>خدمات پس از فروش</span>:  داخلی 3  <b>|</b>  <span> پیگیری سفارشات</span>: داخلی 1
        </p>
        <p>
          <FaMapMarkerAlt color="#676767" size="20px" />
          <span>نشانی (دفتر مرکزی)</span> : تهران، خیابان ایرانشهر جنوبی، پلاک 97، واحد 10
        </p>
        <p>
          <HiOutlineMail color="#676767" size="20px" />
          <span>کد پستی</span>  : 1581673119
 <b>|</b>
<span>فکس</span>: 104-103
        </p>
      </div>
    </div>
  );
}
