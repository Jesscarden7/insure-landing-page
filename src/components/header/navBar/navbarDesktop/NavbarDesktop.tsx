import styles from "./NavbarDesktop.module.css";

function NavbarDesktop() {
  return (
    <div className={styles.navbarDesktop}>
      <nav>How we work</nav>
      <nav>Blog</nav>
      <nav>Account</nav>
      <button>View plans</button>
    </div>
  );
}

export default NavbarDesktop;
