import React from 'react'
import styles from './Dino.module.css'
import Carddino from '../Carddino/Carddino'
import DinoLinks from './DinoLinks'


const Dino = () => {
  return (
    <div>
        <h1 className={styles.dino1}>Благодарим за покупку! <p className={styles.dino2}>Подтверждение покупки и информация о pre-NFT отправлены на email-адрес:<a className={styles.navs} href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:George_Clooney_66%C3%A8me_Festival_de_Venise_(Mostra)_3.jpg"> george.clooney@hotmail.com</a> </p> </h1>
        <div className='cards4'>
        <Carddino/>
        <Carddino/>
        <Carddino/>
        </div>
        <div className={styles.block_dino_10}>
      <h2 className={styles.text_dino_3}>Популяризация благотворительности – одна из главных задач нашего проекта. Мы будем крайне признательны, если вы поддержите эту идею и расскажете о галерее в своих социальных сетях.

       </h2>
 <DinoLinks to='/pino' className={styles.button_dino}><button className={styles.btn_dino}>Расскажите o Dino</button></DinoLinks> 

      </div>
    </div>
  )
}

export default Dino