import React from "react";
import { SiMonkeytype } from "react-icons/si";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";

import { useStore } from "../../store";

import DisplayText from "../DisplayText/DisplayText";
import InputField from "../InputField/InputField";
import Results from "../Results/Results";
import Restart from "../Restart/Restart";
import Timer from "../Timer/Timer";
import TypeSelector from "../TypeSelector/TypeSelector";
import TimeSelector from "../TimeSelector/TimeSelector";

import styles from "./MainContent.module.scss";

const MainContent: React.FC = () => {
  const { reset, newText, isFinished } = useStore();

  React.useEffect(() => {
    reset();
    newText();
  }, [reset, newText]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SiMonkeytype className={styles.logo} />
        <h2 className={styles.title}>
          Speed <span className={styles.titleEnd}>typing</span>
        </h2>
      </header>

      {isFinished ? (
        <Results />
      ) : (
        <div className={styles.main}>
          <div className={styles.selectors}>
            <TypeSelector />
            <TimeSelector />
          </div>

          <div className={styles.mainContent}>
            <DisplayText />
            <InputField />
            <Timer />
            <Restart />
            <p className={styles.hint}>Click on restart to start again or on text to activate it</p>
          </div>
        </div>
      )}
      <div className={styles.author}>
        <span>
          Made by{" "}
          <a href="https://github.com/Dariafable" className={styles.authorLink} target="_blank">
            Daria Nebylitsa
          </a>
        </span>

        <PiPersonArmsSpreadDuotone className={styles.authorIcon} />
      </div>
    </div>
  );
};

export default MainContent;
