import Banner from './banner/Banner';
import MainContent from './mainContent/MainContent';
import styles from './Main.module.css'
import bgMobile from '../../assets/images/bg-pattern-intro-right-mobile.svg'

function Main() {
  return ( 
    <div className={styles.main}>
      <img src={bgMobile} />
      <Banner/>
      <MainContent/>
    </div>
   );
}

export default Main;