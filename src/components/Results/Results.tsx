import React from "react";
import { useStore } from "../../store";

import Restart from "../Restart/Restart";

import styles from "./Results.module.scss";

const Results: React.FC = () => {
  const { wpm, errors, accuracy } = useStore();

  return (
    <div className={styles.results}>
      <h2 className={styles.title}>Results</h2>
      <div className={styles.scores}>
        <p className={styles.text}>
          <span className={styles.criteria}>WPM:</span> {wpm}
        </p>
        <p className={styles.text}>
          <span className={styles.criteria}>Errors:</span> {errors}
        </p>
        <p className={styles.text}>
          <span className={styles.criteria}>Accuracy:</span> {accuracy.toFixed(2)}%
        </p>
      </div>
      <Restart />
    </div>
  );
};

export default Results;
