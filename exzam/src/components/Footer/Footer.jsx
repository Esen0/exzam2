import React from 'react'
import styles from './Footer.module.css' 
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
   <div className={styles.container}>
  <div className={styles.title}>
    <h1 className={styles.title_h1}>Токен<span>добра</span></h1>
    <p className={styles.beta}>beta</p>
</div>

    <div className={styles.block_link1}>
    <FooterLinks className={styles.link2} to="/team"><a className={styles.link1} href="#">Правило сайта</a></FooterLinks>
      <a className={styles.link1} href="#">Оферта</a>
      <a className={styles.link1} href="#">Конфеденциальность</a>
    </div>
    <div className={styles.block_link2}>
     <h1 className={styles.block_title1}>Информация</h1> 
     <FooterLinks className={styles.link2} to="/404">
        <a className={styles.link2} href="#">FAQ</a></FooterLinks>
     <a className={styles.link2} href="#">Миссия</a>
     <a className={styles.link2} href="https://vc.ru/marketing/363272-slovar-nft-terminov-likbez-dlya-predprinimateley-i-marketologov" target={'_blank'} >Что такое pre-NFT?</a>
    </div>
    <div className="block_link3">
    <h1>Связь</h1>
    <a href="https://web.telegram.org/k/" target={'_blank'}>telegram:токен добра</a>
    <a href="https://mail.ru/" target={'_blank'}>help@tokendobra.ru</a>
    </div>
   </div>
  )
}

export default Footer