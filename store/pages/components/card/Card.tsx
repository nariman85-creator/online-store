import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
interface CardProps{
    id:string |number;
    url:string;
    price:number;
    title:string;

}

const Card:React.FC<CardProps>=({id,title,url,price})=> {
    return (
        <div className={styles.card}>
        <div className={styles.card__item}>
        <h2 className={styles.h2}>{title}</h2>
        <Link href={`/product/${id}`}>
        <div className={styles.card__img}>
        <img src={url} alt="furniture"/>
        </div>

        </Link>
        <div className={styles.card__footer}>
        <div className={styles.card__price}>
          ${price}
        </div>
        <div className={styles.card__product_title}>
        <p>{title}</p>
        </div>
        <div className={styles.button__container}>
        <button className={styles.card__button__sale}>Купить </button>
        <button className={styles.card__button_delete}>Удалить</button>

        </div>
        </div>
        
        </div>
            
        </div>
    )
}

export default Card
