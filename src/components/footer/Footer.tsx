import styles from "./Footer.module.css";
import FooterMedia from "./top/FooterMedia";
import FooterLinks from "./bottom/FooterLinks";
import { links } from "../../utils/linksInfo";

function Footer() {
  return (
    <div className={styles.footer}>
      <FooterMedia />
      <div className={styles.footerLinksWrapper}>
        {links.map((link) => (
          <FooterLinks link={link} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
