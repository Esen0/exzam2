import React from 'react'
import styles from './Carddino.module.css'
import imgdino from '../img/image 3.png'


const Carddino = () => {
  return (
    <div className={styles.card_din}>
            <div className={styles.title}>
                <img className={styles.imgdino2} src={imgdino} alt="" />
                </div>
            
            <div className={styles.dasc}>
            <h1 className={styles.title_din}>Дино</h1>
            <h5 className={styles.text_dino_1}>Автор:Андрей Смирнов<br />
            Фонд:АНО «Центр проблем аутизма»<br />
            <b>1500 ₽</b> <br />
            </h5>
               <h4 className={styles.text_dino_2}>
               Ваш pre-NFT: <br />
               as32ds-fdsd31-dffds43-d2221ds-22fdcfq-13fd45ㅤㅤㅤㅤ #
               </h4>

            </div>
            {/* <Button text="Button" /> */}
        </div>
  )
}

export default Carddino