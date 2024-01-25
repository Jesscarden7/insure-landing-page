import styles from "./CardInfo.module.css";
import Card from "./card/Card";
import { cards } from "../../../../utils/dataCard";

function CardInfo() {
  return (
    <div className={styles.cardInfo}>
      <hr />
      <h1>We're different</h1>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default CardInfo;
