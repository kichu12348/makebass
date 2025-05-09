import styles from "./styles/navigator.module.css";

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.navButton}>
        Overview
        <span />
      </button>
      <button className={styles.navButton}>
        Insights
        <span />
      </button>
      <button className={styles.navButton}>
        Guests
        <span />
      </button>
      <span className={styles.separator}>|</span>
      <button className={styles.navButton}>
        Event Page
        <span />
      </button>
      <button className={styles.navButton}>
        Form Builder
        <span />
      </button>
      <span className={styles.separator}>|</span>
      <button className={styles.navButton}>
        Scan QR
        <span />
      </button>
      <button className={styles.navButton}>
        In-Event
        <span />
      </button>
      <span className={styles.separator}>|</span>
      <button className={styles.navButton}>
        Logs
        <span />
      </button>
      <button className={styles.navButton}>
        Finance
        <span />
      </button>
      <span className={styles.separator}>|</span>
      <button className={styles.navButton}>
        Post Event
        <span />
      </button>
      <button className={styles.navButton}>
        Child Events
        <span />
      </button>
    </div>
  );
}
