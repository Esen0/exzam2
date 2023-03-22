import React from 'react'
import img from '../img/image 7.png'
import styles from './Fond.module.css'
import imgg from '../img/avatar.png'
import Card from '../Card/Card'
import img_foto1 from '../img/animation.png'
import img_foto5 from '../img/image 7 (1).png'
import img_foto6 from '../img/image 9.png'
import img_foto7 from '../img/image 12.png'
import img_foto8 from '../img/image 10.png'
import Footer from '../Footer/Footer'





const Fond = () => {
  return (
    <div>
      <img className={styles.img} src={img} alt="" />
      <img className={styles.imgg} src={imgg} alt="" />
      <h1 className={styles.text1}>АНО «Центр проблем аутизма»</h1>
      <div className={styles.block}>
        <h2 className={styles.text2}>Картин 10</h2>
        <h2 className={styles.text3}>NFT 10000</h2>
        <div className={styles.line}></div>
      </div>
      <h3 className={styles.text4}>АНО «Центр проблем аутизма» — экспертный центр, автор передовой модели инклюзивной школы и организатор тематической конференции. Организация является официальным центром обучения доказательным методикам коррекции РАС (расстройства аутистического спектра). Помимо образовательной и просветительской деятельности центр помогает семьям с детьми-аутистами, а также участвует в изменении законодательной базы в интересах детей и взрослых с РАС.</h3>
      <div className='cards'>
      <Card img={img_foto5}/>
      <Card img={img_foto6} />
      <Card img={img_foto7} />
      <Card img={img_foto8} />
      <Card img={img_foto5} />
      <Card img={img_foto6} />   
      <Card img={img_foto7} />
      <Card img={img_foto8} />
      <Card img={img_foto5} />
      <Card img={img_foto6} />   
      <Card img={img_foto7} />
      <Card img={img_foto8} />    
      <Card img={img_foto5} />
      <Card img={img_foto6} />   
      <Card img={img_foto7} />
      <Card img={img_foto8} />
    </div>
      <div className={styles.block2}>
        <img className={styles.imgg_11} src={img_foto1} alt="" />
        <h1 className={styles.text5}>Купить NFT очень просто</h1>
        <h4 className={styles.text6}>В нашей галерее вы покупаете pre-NFT. Это ваучер, резервирующий NFT-картину. Для покупки pre-NFT нужна только банковская карта, Web3-кошелёк и криптовалюта не понадобятся. Этот упрощённый вариант покупки NFT подойдёт всем, особенно тем, кто ещё не начал разбираться в технологии Web3. Обменять свой pre-NFT на NFT-токен можно в любой момент при наличии у вас криптокошелька.</h4>


      </div>
      <Footer/>
      
      </div>




      
  )
}

export default Fond