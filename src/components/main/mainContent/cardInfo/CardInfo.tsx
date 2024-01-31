import styles from "./CardInfo.module.css";
import Card from "./card/Card";
import { cards } from "../../../../utils/dataCard";

function CardInfo() {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.title}>
        <hr />
        <h1>We're different</h1>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
