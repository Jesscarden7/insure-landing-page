import CardInfo from './cardInfo/CardInfo';
import MoreInfo from './moreInfo/MoreInfo';
import styles from './MainContent.module.css'

function MainContent() {
  return ( 
    <div className={styles.mainContent}>
      <CardInfo/>
      <MoreInfo/>
    </div>
   );
}

export default MainContent;