import MeetupItem from "../meetup-item";
import styles from "./styles.module.scss";

function MeetupItemsList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map(({ id, image, title, address }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </ul>
  );
}

export default MeetupItemsList;
