import styles from './Banner.module.css'

function Banner() {
  return ( 
    <div className={styles.banner}>
      <div className={styles.imgIntro}></div>
      <div className={styles.introDescription}>
        <h1>Humanizing <br /> your insurance.</h1>
        <p>Get your life insurance coverage easier and <br /> faster. We blend our expertise and <br /> technology to help you find the plan that's <br /> right for you. Ensure you and your loved <br /> ones are protected.</p>
        <button>View plans</button>
      </div>
    </div>
   );
}

export default Banner;