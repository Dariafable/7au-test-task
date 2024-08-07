import React from "react";
import { useStore } from "../../store";

import styles from "./TimeSelector.module.scss";
const TimeSelector: React.FC = () => {
  const { initialTimer, setInitialTimer } = useStore();

  return (
    <div className={styles.timeSelector}>
      <div
        className={`${styles.option} ${initialTimer === 15 ? styles.active : ""}`}
        onClick={() => setInitialTimer(15)}
      >
        15 seconds
      </div>
      <div
        className={`${styles.option} ${initialTimer === 30 ? styles.active : ""}`}
        onClick={() => setInitialTimer(30)}
      >
        30 seconds
      </div>
    </div>
  );
};

export default TimeSelector;
