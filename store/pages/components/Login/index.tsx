import React from 'react';
import styles from './Login.module.css';
import Link from 'next/link';

const Login:React.FC=()=>{
    return (
        <div className={styles.login__wrapper}>
        <div className={styles.form__container}>
        <form  className={styles.login__form}>
        <h2>Войти</h2>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <button type="submit">Войти</button>
        <Link href="/auth/registration">
        <a >
            Зарегестрироватся ?
        </a>
        </Link>
        
        </form>
        </div>
            
        </div>
    )
}
export default Login;