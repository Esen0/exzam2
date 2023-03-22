import React from 'react'
import CustomLink from './CustomLink'
import styles from "./Nav.module.css"

const Nav = () => {
  return (
   <div className={styles.container}>
    
<div className={styles.title}>
    <h1 className={styles.title_h1}>Токен<span>добра</span></h1>
    
</div>
<p className={styles.beta}>beta</p>
<div className={styles.links}>

  <CustomLink to="/team">
    <a href="" className={styles.help}>Зачем все это </a>
  </CustomLink>

  {/* <CustomLink to=""> */}
    <a href="https://vc.ru/marketing/363272-slovar-nft-terminov-likbez-dlya-predprinimateley-i-marketologov" target={'_blank'} className={styles.nft}>Что такое pre-NFT?</a>
 {/* </CustomLink> */}

  <CustomLink to="/404">
    <a href="" className={styles.faq}>FAQ</a>
  </CustomLink>

  <button className={styles.btn}>Расскажите о нас</button>

</div>
   </div>
  )
}

export default Nav