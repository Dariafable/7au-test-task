import { StateCreator } from "zustand";
import { IStoreState, ITypingState } from "../../types";
import { getRandomText } from "../../utils/helpers";

const typingState: StateCreator<IStoreState, [], [], ITypingState> = (set, get) => ({
  text: getRandomText(false, false),
  typedText: "",
  wpm: 0,
  errors: 0,
  correctChars: 0,
  accuracy: 0,
  hasStarted: false,
  isFinished: false,
  includePunctuation: false,
  includeNumbers: false,
  setTypedText: (typedText) => {
    const state = get();
    if (state.isFinished) return;

    const now = new Date().getTime();

    if (!state.hasStarted) {
      set({ startTime: now, hasStarted: true });
      state.startTimer();
    }

    const correctChars = state.text
      .slice(0, typedText.length)
      .split("")
      .reduce((acc, char, i) => acc + (char === typedText[i] ? 1 : 0), 0);

    const errors = typedText.length - correctChars;
    const accuracy = typedText.length > 0 ? (correctChars / typedText.length) * 100 : 0;

    const elapsedTime = (now - (state.startTime || now)) / 60000;
    const wpm =
      typedText.length > 0 && elapsedTime > 0 && !state.isFinished
        ? Math.round(typedText.length / 5 / elapsedTime)
        : 0;

    const isFinished =
      typedText.length === state.text.length || elapsedTime * 60 >= state.initialTimer;

    set({
      typedText,
      errors,
      correctChars,
      accuracy,
      wpm,
      endTime: isFinished ? now : null,
      isFinished,
    });
  },
  setIncludePunctuation: (value) =>
    set({ includePunctuation: value, text: getRandomText(value, get().includeNumbers) }),
  setIncludeNumbers: (value) =>
    set({ includeNumbers: value, text: getRandomText(get().includePunctuation, value) }),
  reset: () => {
    const state = get();
    if (state.intervalId) {
      clearInterval(state.intervalId);
    }
    set({
      text: getRandomText(get().includePunctuation, get().includeNumbers),
      typedText: "",
      wpm: 0,
      errors: 0,
      correctChars: 0,
      accuracy: 0,
      startTime: null,
      endTime: null,
      timer: state.initialTimer,
      hasStarted: false,
      isFinished: false,
      intervalId: null,
    });
  },
  newText: () =>
    set({
      text: getRandomText(get().includePunctuation, get().includeNumbers),
      typedText: "",
      wpm: 0,
      errors: 0,
      correctChars: 0,
      accuracy: 0,
    }),
});

export default typingState;
