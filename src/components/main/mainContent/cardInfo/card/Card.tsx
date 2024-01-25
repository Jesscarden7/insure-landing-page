import styles from './Card.module.css'
import { cardInfo } from '../../../../../types';

type cardProps = {
  card: cardInfo
}

function Card({card}: cardProps) {
  return (
    <div className={styles.card}>
      <img src={card.icon} />
      <h4>{card.title}</h4>
      <p>{card.content}</p>
    </div>
   );
}

export default Card;