import styles from '../styles/Home.module.css'
import { Header } from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import Card from './components/card/Card';

export default function Home() {
  return (
    <div className={styles.container}>
    <Header/>
    <div className={styles.main}>
    <div className="wrapper df">
    

    </div>
    </div>
    <Footer/>
    </div>
  )
}
