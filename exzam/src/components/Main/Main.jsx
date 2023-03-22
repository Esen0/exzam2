import React from 'react'
import styles from "./Main.module.css"
import drag from "../img/dragon.png"

const Main = () => {
  return (
    <div className="container">
        <div className={styles.main}>
          <div className={styles.asaid}>
  <img src={drag} alt="" />
</div>
<div className={styles.title}>
  <h1>Благотворительная <span className={styles.nft_span}>NFT-галерея</span> c картинами особенных детей и подростков</h1>
</div>

<button>Посмотреть все картины</button>
<p>Чтобы зарезервировать NFT, нужна только банковская карта. Криптовалюта и Web3-кошелёк вам не понадобятся.</p>
<div className="line"></div>
<h3>Покупка картины - это <span>ваше пожертвование</span> в организацию, которую представляет автор работы. Вы не только станете благотворителем, но и получите право владения цифровой копией картины или её оригиналом, в зависимости от того, какой токен вы приобрели.</h3>
        </div>
    </div>
  )
}

export default Main