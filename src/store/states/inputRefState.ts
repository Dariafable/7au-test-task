import React from "react";
import { StateCreator } from "zustand";
import { IInputRefState, IStoreState } from "../../types";

const inputRefState: StateCreator<IStoreState, [], [], IInputRefState> = (set, get) => ({
  inputRef: React.createRef<HTMLInputElement>(),
  focusInput: () => {
    const inputRef = get().inputRef;
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    } else {
      console.log("Input ref not found");
    }
  },
});

export default inputRefState;
