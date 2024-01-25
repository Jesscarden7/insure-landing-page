import styles from "./FooterMedia.module.css";
import logo from "../../../assets/images/logo.svg";
import facebook from "../../../assets/images/icon-facebook.svg";
import twitter from "../../../assets/images/icon-twitter.svg";
import pinterest from "../../../assets/images/icon-pinterest.svg";
import instagram from "../../../assets/images/icon-instagram.svg";

function FooterMedia() {
  return (
    <div className={styles.footerMedia}>
      <div className={styles.imgWrapper}>
        <img src={logo} />
      </div>
      <div className={styles.mediaWrapper}>
        <img src={facebook} />
        <img src={twitter} />
        <img src={pinterest} />
        <img src={instagram} />
      </div>
      <hr />
    </div>
  );
}

export default FooterMedia;
