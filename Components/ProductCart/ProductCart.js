import styles from "./ProductCart.module.css"
export default function ProductCart({id,price,image,title,text}) {
  return (
    <div className={`${styles.cartcontianer}`}> 
    <div className={styles.cartheader}>
      <img src={image}alt="" />
    </div>
    <div className={styles.cartmiddle}>
  <p>    
    {text}</p>
    </div>
    <div className={styles.cartfooter}>
      <button>افزودن به سبد خرید</button>
      <p>{price.toLocaleString()}: تومان</p>
    </div>
    </div>
  )
}
