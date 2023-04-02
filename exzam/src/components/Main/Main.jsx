import React from 'react'
import styles from "./Main.module.css"
import drag from "../img/dragon.png"
import CardMain from '../CardMain/CardMain'
import Card from '../Card/Card'
import img_1 from '../img/img_1.png'
import img_2 from '../img/img_2.png'
import img_3 from '../img/img_3.png'
import img_4 from '../img/img_4.png'
import img_5 from '../img/img_5.png'
import img_6 from '../img/img_6.png'
import dask from '../img/dask.png'
import img_7 from '../img/image 7.png'
import img_8 from '../img/image 9.png'
import img_9 from '../img/image 10.png'
import img_10 from '../img/image 12.png'
import back1 from '../img/back1.png'
import MainLinks from './MainLinks'
import back2 from '../img/back2.png'
import img_foto1 from '../img/animation.png'
import Accardeon from '../../UI/Accardeon/Accardeon'
import Modal from '../../UI/Modal/Modal'

const Main = () => {
  return (
    <div className="container">
        <div className={styles.main}>
          <div className={styles.asaid}>
  <img src={drag} alt="" />
</div>
<div className={styles.title}>
  <h1>Благотворительная <strong className={styles.nft_span}>NFT-галерея</strong>  c картинами особенных детей и подростков</h1>
</div>
{/* <div className={styles.button}> */}
 <MainLinks to='/fond' className={styles.button}><button className={styles.btn}>Посмотреть все картины</button></MainLinks> 
  {/* </div> */}

<p className={styles.text}>Чтобы зарезервировать NFT, нужна только банковская карта. Криптовалюта и Web3-кошелёк вам не понадобятся.</p>

<div className={styles.line}></div>
<h3 className={styles.text_end}>Покупка картины - это <span>ваше пожертвование</span> в организацию, которую представляет автор работы. Вы не только станете благотворителем, но и получите право владения цифровой копией картины или её оригиналом, в зависимости от того, какой токен вы приобрели.</h3>
        </div>


        <div className="card">

          <div className="h1"><h1>Последние работы</h1></div>
          <div className={styles.block}>
<CardMain img={img_1}/>
<CardMain img={img_2}/>
<CardMain img={img_3}/>
<CardMain img={img_5}/>
</div>
<div className={styles.block1}>
<CardMain img={img_4}/>
<CardMain img={img_5}/>
<CardMain img={img_6}/>
<CardMain img={img_3}/>
</div>

        </div>

<div className="fond">

<h1>Фонды</h1>
<div className="block1">
<img className={styles.back1} src={back1} alt="" />
<img className={styles.dask} src={dask} alt="" />
<div className="text_block">
  <h1 className={styles.blockTitle}>Журавлик</h1>
  <p className={styles.blockNumber}>10 картин | 10 000 NFT</p>
  <p className={styles.blockText}>Какой-то рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде  рассказ о фонде рассказ. Подробнее</p>
</div>
<div className={styles.card_block}>
  <Card img={img_8}/>
  <Card img={img_9}/>
  <Card img={img_10}/>
  </div>
</div>

<div className={styles.block2}>
<img className={styles.back2} src={back2} alt="" />
<img className={styles.dask2} src={dask} alt="" />
<div className="text_block">
  <h1 className={styles.blockTitle2}>Журавлик</h1>
  <p className={styles.blockNumber2}>10 картин | 10 000 NFT</p>
  <p className={styles.blockText2}>Какой-то рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде рассказ о фонде  рассказ о фонде рассказ. Подробнее</p>
</div>
<div className={styles.card_block2}>
  <Card img={img_8}/>
  <Card img={img_9}/>
  <Card img={img_10}/>
  </div>
</div>
</div>

<div className={styles.yellowCard}>
        <img className={styles.img_11} src={img_foto1} alt="" />
        <h1 className={styles.text5}>Купить NFT очень просто</h1>
        <h4 className={styles.text6}>В нашей галерее вы покупаете pre-NFT. Это ваучер, резервирующий NFT-картину. Для покупки pre-NFT нужна только банковская карта, Web3-кошелёк и криптовалюта не понадобятся. Этот упрощённый вариант покупки NFT подойдёт всем, особенно тем, кто ещё не начал разбираться в технологии Web3. Обменять свой pre-NFT на NFT-токен можно в любой момент при наличии у вас криптокошелька.</h4>
      </div>

      <div className={styles.acardeon}>
        <Accardeon className={styles.AccardeonText}></Accardeon>
      </div>
    </div>
  )
}

export default Main