import styles from './Navbar.module.css'
import hamburger from '../../../assets/images/icon-hamburger.svg'

function Navbar() {
  return ( 
    <div className={styles.navbarWrapper}>
      <img src={hamburger} />
      <div className={styles.navbar}>
        <nav>How we work</nav>
        <nav>Blog</nav>
        <nav>Account</nav>
        <nav>View plans</nav>
      </div>
    </div>
   );
}

export default Navbar;