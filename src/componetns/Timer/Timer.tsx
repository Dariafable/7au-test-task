import React from "react";
import { useStore } from "../../store";

import styles from "./Timer.module.scss";

const Timer: React.FC = () => {
  const { timer } = useStore();

  return (
    <div className={styles.timer}>
      <span className={styles.timerNumber}>{timer}</span> seconds remaining
    </div>
  );
};

export default Timer;
