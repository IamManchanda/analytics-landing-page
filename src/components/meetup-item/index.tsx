import UiCard from "../ui-card";
import styles from "./styles.module.scss";

function MeetupItem({ id, image, title, address }) {
  return (
    <li className={styles.item}>
      <UiCard>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </UiCard>
    </li>
  );
}

export default MeetupItem;
