import Link from "next/link";

import styles from "./styles.module.scss";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/auth">Login</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
