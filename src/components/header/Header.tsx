import Navbar from "./navbar/Navbar";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.imgWrapper}>
        <img src={logo} />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
