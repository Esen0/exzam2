import React from 'react'
import styles from "./Acardeon.module.css"

const Accardeon = ({children}) => {
  return (
    
    <div className={styles.faq}>
        <div className={styles.faq_item}>
            <label htmlFor="faq_1" className={styles.faq_title}>Зачем мне покупать картину в цифровом формате?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_1' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
            <div className={styles.faq_item}>
            <label htmlFor="faq_2" className={styles.faq_title}>Кто получает деньги с продажи картины?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_2' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
        </div>
        <div className={styles.faq_item}>
            <label htmlFor="faq_3" className={styles.faq_title}>Что такое pre-NFT?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_3' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
        </div>
        <div className={styles.faq_item}>
            <label htmlFor="faq_4" className={styles.faq_title}>Вы точно переводите деньги фондам?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_4' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
        </div>
        <div className={styles.faq_item}>
            <label htmlFor="faq_5" className={styles.faq_title}>Зарабатывает ли ваша галерея с продаж картин?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_5' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
        </div>
        <div className={styles.faq_item}>
            <label htmlFor="faq_6" className={styles.faq_title}>Как я могу купить оригинал картины?</label>
            <input className={styles.faq_input} type="checkbox" name='faq' id='faq_6' />
            <div className={styles.faq_text}>
                <p>Ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь ответ здесь.</p>
            </div>
        </div>
        </div>
    </div>  
  )
}

export default Accardeon