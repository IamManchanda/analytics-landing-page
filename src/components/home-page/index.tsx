import styles from "./styles.module.scss";

function HomePage() {
  // Show Link to Login page if NOT auth

  return (
    <section className={styles.home}>
      <h1>Welcome on Board!</h1>
    </section>
  );
}

export default HomePage;
