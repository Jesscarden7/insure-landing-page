import Banner from "./banner/Banner";
import MainContent from "./mainContent/MainContent";
import styles from "./Main.module.css";
import bgMobile from "../../assets/images/bg-pattern-intro-right-mobile.svg";
import bgDesktop from "../../assets/images/bg-pattern-intro-left-desktop.svg";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.bgMobileContainer}>
        <img src={bgMobile} />
      </div>
      <div className={styles.bgDesktopContainer}>
        <img src={bgDesktop} />
      </div>
      <Banner />
      <MainContent />
    </div>
  );
}

export default Main;
