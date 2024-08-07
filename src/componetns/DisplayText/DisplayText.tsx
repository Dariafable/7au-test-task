import React from "react";
import { useStore } from "../../store";

import styles from "./DisplayText.module.scss";

const DisplayText: React.FC = () => {
  const { text, typedText } = useStore();
  const getHighlightedText = () => {
    return text.split("").map((char, index) => {
      const inputChar = typedText[index];
      if (index < typedText.length) {
        if (inputChar === char) {
          return (
            <span key={index} className={styles.correct}>
              {char}
            </span>
          );
        } else {
          return (
            <span key={index} className={styles.incorrect}>
              {char}
            </span>
          );
        }
      }
      return (
        <span key={index} className={styles.incomplete}>
          {char}
        </span>
      );
    });
  };
  return <div className={styles.textOverlay}>{getHighlightedText()}</div>;
};

export default DisplayText;
