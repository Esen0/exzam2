import React from 'react'
import styles from './Card2.module.css'
import imgg2 from '../img/avatar.png'


const Card2 = ({title, name, children}) => {
  return (
    <div className={styles.card2}>
    <div className={styles.title2}>
         <h1>{title}</h1>
    </div>
        <img className={styles.imgg2} src={imgg2} alt="" />
    <div className={styles.dasc2}>
        <h3 className={styles.text22}>{name}<p className={styles.text222}>{children}</p></h3>
        
    </div>
    {/* <Button text="Button" /> */}
</div>
  )
}

export default Card2