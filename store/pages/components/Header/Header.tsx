import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.header}>
        <div className={styles.header__logo}>
        <Link href="/">
        <a>
            <img src="/images/logo.jpg" alt="logo"/>
        </a>
        </Link>
        </div>
        <div className={styles.header__search__input}>
        <div className={styles.header__search__icon}>
        <img src="/images/search.png" alt="icon-search"/>
        </div>
        <input  type="text" placeholder="Search in you site"/>
        <button>Search</button>
        </div>
        <div className={styles.rootDiv}>
        <div className={styles.header__notification__hamburger}>
        <span></span>
        <span></span>
        <span></span>
        </div>

        <div className={styles.header_menu__main}>

        <div className={styles.header__notification}>
        <Link href="/notify">
        <a className={styles.anchor}>
        <img  src="/images/notifi.png" alt="notify"/>
        <span className="notify__title">Уведомление</span>
        </a>
        </Link>
        </div>
        <div className={styles.logIn__logOut}>
        <Link href="/auth/login">
        <a className={styles.anchor}>
        <img src="/images/user.png" alt="user"/>
        <span>Войти</span>
        </a>
        </Link>
        </div>
        <div className={styles.orders}>
        <Link href="/orders">
        <a className={styles.anchor} >
        <span className={styles.orderCount}></span>
        <img className={styles.imgAbsolute} src="/images/baskets.png" alt="basket"/>
        <span>Мои заказы</span>
        </a>
        </Link>
        </div>
        <div className={styles.baskets}>
        <Link href="/baskets">
        <a className={styles.anchor}>
        <span className={styles.basketCount}></span>
        <img className={styles.imgAbsolute} src="/images/basc.png" alt="bask"/>
        <span>Покупки</span>
        </a>
</Link>
        </div>

        </div>
        </div>
        </div>
        )
}




