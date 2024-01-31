import styles from "./NavbarMobile.module.css";
import hamburger from "../../../../assets/images/icon-hamburger.svg";
import close from "../../../../assets/images/icon-close.svg";
import { useState } from "react";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.navbarMobile}>
      <img
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        src={isMenuOpen ? close : hamburger}
      />
      {isMenuOpen && (
        <div className={styles.menuFlyout}>
          <nav>How we work</nav>
          <nav>Blog</nav>
          <nav>Account</nav>
          <button>View plans</button>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
