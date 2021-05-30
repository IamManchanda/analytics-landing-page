import MainNavigation from "../main-navigation";
import styles from "./styles.module.scss";

function MainLayout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
