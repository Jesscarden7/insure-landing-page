import styles from './Navbar.module.css'
import NavbarDesktop from './navbarDesktop/NavbarDesktop';
import NavbarMobile from './navbarMobile/NavbarMobile';

function Navbar() {
  return ( 
    <div className={styles.navbarWrapper}>
      <NavbarMobile/>
      <NavbarDesktop/>
    </div>
   );
}

export default Navbar;