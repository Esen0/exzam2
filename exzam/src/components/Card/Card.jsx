import React from 'react'
import styles from './Card.module.css'
import Button from "../Button/Button"
// import img_foto2 from '../img/image 7 (1).png'

const Card = (props) => {
  return (
    <div className={styles.card}>
            <div className={styles.title}>
                <img className={styles.imgs} src={props.img} alt="" />
            </div>
            <div className={styles.dasc}>
                <p className={styles.text7}>1500 ₽<p className={styles.text8}>Олег Орлов</p></p>

                <div className={styles.block3}>
                  <div className={styles.block4}>
                  </div>
                </div>
                <h4 className={styles.block5}>0 / 1000</h4>

            </div>
            {/* <Button text="Button" /> */}
        </div>
  )
}

export default Card