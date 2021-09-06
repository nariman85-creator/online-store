import React from 'react';
import styles from "./Footer.module.css";

 const Footer:React.FC=()=> {
    return (
        <footer className={styles.footer}>
    
        <div className="wrapper">
        <div className={styles.footer__info}>
        &copy;
        <span>All rights everybody</span>
        </div>
        
        </div>
        </footer>
    
    )
}
export default Footer;



