import React from 'react'
import styles from "./CardMain.module.css" 

const CardMain = (props) => {
  return (
    <div className="container">
         <div className={styles.card}>
                <img className={styles.imgs} src={props.img} alt="" />
           <p className={styles.title}>Дино</p>
           <div className={styles.block1}> 
             <p className={styles.rub}>1500 ₽</p>
 <h4 className={styles.nubers}>0 / 1000</h4></div>
             
                <div className={styles.block}>
                  </div>
                </div>
                 <input className={styles.range} type="range" />
                 <div className={styles.block_text}> 
                 <p className={styles.text8}>Олег Орлов</p>      
                   </div>
                   
        </div>
    
  )
}

export default CardMain