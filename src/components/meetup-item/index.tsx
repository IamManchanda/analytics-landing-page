import UiCard from "../ui-card";
import styles from "./styles.module.scss";

function MeetupItem(props) {
  return (
    <li className={styles.item}>
      <UiCard>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </UiCard>
    </li>
  );
}

export default MeetupItem;
