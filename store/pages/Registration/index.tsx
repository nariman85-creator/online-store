import React from 'react';
import Link from 'next/link';
import styles from './Registration.module.css';

const index:React.FC=()=> {
    return (
        <div className={styles.form__register}>
        <form  className={styles.register__form}>
        <h3>Регистрация</h3>
        <input type="text" placeholder="First Name" className={styles.form__input}/>
        <input type="text" placeholder="Last Name"className={styles.form__input}/>
        <input type="text" placeholder="User Name"className={styles.form__input}/>
        <input type="password" placeholder="Password"className={styles.form__input}/>
        <input type="password" placeholder="Password Verify"className={styles.form__input}/>
        <button className={styles.form__button}>Зарегестрироватся</button>
        <Link href="/auth/ligin">
        <a className={styles.form__anchor}>
            Авторизоватся?
        </a>
        </Link>
        </form>
            
        </div>
    )
}

export default index
