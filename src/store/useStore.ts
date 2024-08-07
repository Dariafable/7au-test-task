import create from "zustand";
import typingState from "./states/typingState";
import timerState from "./states/timerState";
import inputRefState from "./states/inputRefState";
import { IStoreState } from "../types";

const useStore = create<IStoreState>((set, get, api) => ({
  ...typingState(set, get, api),
  ...timerState(set, get, api),
  ...inputRefState(set, get, api),
}));

export default useStore;
