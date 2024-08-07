import React from "react";
import { RxUpdate } from "react-icons/rx";

import { useStore } from "../../store";

import styles from "./Restart.module.scss";

const Restart: React.FC = () => {
  const { reset, newText, focusInput } = useStore();

  const handleRestart = () => {
    reset();
    newText();
    focusInput();
  };

  return (
    <button className={styles.button} onClick={handleRestart}>
      Restart
      <RxUpdate />
    </button>
  );
};

export default Restart;
