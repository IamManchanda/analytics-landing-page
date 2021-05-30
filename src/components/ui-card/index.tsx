import styles from "./styles.module.scss";

function UiCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default UiCard;
