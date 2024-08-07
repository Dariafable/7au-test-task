import React from "react";
import { useStore } from "../../store";

import styles from "./TypeSelector.module.scss";

const TypeSelector: React.FC = () => {
  const { includePunctuation, includeNumbers, setIncludePunctuation, setIncludeNumbers } =
    useStore();

  return (
    <div className={styles.typeSelector}>
      <div
        className={`${styles.option} ${includePunctuation ? styles.active : ""}`}
        onClick={() => setIncludePunctuation(!includePunctuation)}
      >
        Punctuation
      </div>
      <div
        className={`${styles.option} ${includeNumbers ? styles.active : ""}`}
        onClick={() => setIncludeNumbers(!includeNumbers)}
      >
        Numbers
      </div>
    </div>
  );
};

export default TypeSelector;
