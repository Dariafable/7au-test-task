import React from "react";
import { useStore } from "../../store";

import styles from "./InputField.module.scss";

const InputField: React.FC = () => {
  const { typedText, setTypedText, isFinished, inputRef, focusInput } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isFinished) {
      setTypedText(e.target.value);
    }
  };

  React.useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={typedText}
      onChange={handleChange}
      className={styles.input}
      onFocus={focusInput}
      autoFocus
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
    />
  );
};

export default React.memo(InputField);
