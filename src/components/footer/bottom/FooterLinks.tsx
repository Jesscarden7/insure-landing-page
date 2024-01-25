import { linkInfo } from "../../../types";
import styles from "./FooterLinks.module.css";

type listProps = {
  link: linkInfo;
};

function FooterLinks({ link }: listProps) {
  return (
    <div className={styles.footerLinks}>
      <h4>{link.title}</h4>
      <ul>
        {link.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
