import styles from "./Footer.module.css";
import FooterMedia from "./top/FooterMedia";
import FooterLinks from "./bottom/FooterLinks";
import { links } from "../../utils/linksInfo";

function Footer() {
  return (
    <div className={styles.footer}>
      <FooterMedia />
      {links.map((link) => (
        <FooterLinks link={link} />
      ))}
    </div>
  );
}

export default Footer;
