import styles from './styles/recent.module.css';
import { FaChevronDown } from 'react-icons/fa';

export default function Recent() {
  return (
    <div className={styles.guestRecentContainer}>
      <h3>Recent Guests(24)</h3>

      <div className={styles.guestRecentButtons}>
        <button className={styles.guestRecentButton}>
          <span>Select Multiple</span>
        </button>
        <button className={styles.guestRecentButton}>
          <span>
            Checked In | <FaChevronDown size={10} />
          </span>
        </button>
        <button className={styles.guestRecentButton}>
          <span>
            Approval Status | <FaChevronDown size={10} />
          </span>
        </button>
        <button className={styles.guestRecentButton}>
          <span>
            Registeration Status | <FaChevronDown size={10} />
          </span>
        </button>
      </div>
    </div>
  );
}
