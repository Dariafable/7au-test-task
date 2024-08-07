import React from "react";
import { useStore } from "../../store";

import styles from "./DisplayText.module.scss";

const DisplayText: React.FC = () => {
  const { text, typedText } = useStore();

  return (
    <div className={styles.textOverlay}>
      {text.split("").map((char, index) => {
        const isTyped = index < typedText.length;
        const isCorrect = isTyped && typedText[index] === char;

        return (
          <React.Fragment key={index}>
            <span
              className={
                isTyped ? (isCorrect ? styles.correct : styles.incorrect) : styles.incomplete
              }
            >
              {char}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DisplayText;
