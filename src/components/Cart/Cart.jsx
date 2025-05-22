import RecycleBin from './RecycleBin.png';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { useState } from 'react';
export default function Cart() {
function deleteCart(){
  
}
  const[cartDelete, setCartDelete]=useState(0)
  return (
    <div className={styles.border}>
      <div className={styles.containerText}>
        <p className={styles.title}>Текст</p>
        <img onClick={deleteCart} className={styles.img} src={RecycleBin} alt="RecycleBin" />
      </div>
      <div className={styles.containerBtn}>
        <Link className={styles.button} to="/test/*">
          Take Tast
        </Link>
      </div>
    </div>
  );
}
