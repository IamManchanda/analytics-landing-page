import ProfileForm from "../profile-form";
import styles from "./styles.module.scss";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
