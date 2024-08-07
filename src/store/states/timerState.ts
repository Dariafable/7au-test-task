import { StateCreator } from "zustand";
import { IStoreState, ITimerState } from "../../types";

const timerState: StateCreator<IStoreState, [], [], ITimerState> = (set) => ({
  timer: 30,
  initialTimer: 30,
  setInitialTimer: (value) => {
    set({ timer: value, initialTimer: value });
  },
  startTime: null,
  endTime: null,
  intervalId: null as number | null,
  startTimer: () => {
    const startTime = new Date().getTime();
    const intervalId = setInterval(() => {
      set((state) => {
        const elapsed = (new Date().getTime() - startTime) / 1000;
        const remaining = Math.max(state.initialTimer - Math.round(elapsed), 0);

        if (remaining === 0) {
          clearInterval(intervalId);
          return { timer: 0, isFinished: true, intervalId: null };
        }

        return { timer: remaining };
      });
    }, 1000) as unknown as number;
    set({ startTime, hasStarted: true, intervalId });
  },
});

export default timerState;
