export interface ITypingState {
  text: string;
  typedText: string;
  wpm: number;
  errors: number;
  correctChars: number;
  accuracy: number;
  setTypedText: (typedText: string) => void;
  includePunctuation: boolean;
  includeNumbers: boolean;
  setIncludePunctuation: (value: boolean) => void;
  setIncludeNumbers: (value: boolean) => void;
  reset: () => void;
  newText: () => void;
  hasStarted: boolean;
  isFinished: boolean;
}

export interface ITimerState {
  startTime: number | null;
  endTime: number | null;
  timer: number;
  initialTimer: number;
  setInitialTimer: (value: number) => void;
  startTimer: () => void;
  intervalId: number | null;
}

export interface IInputRefState {
  inputRef: React.RefObject<HTMLInputElement> | null;
  focusInput: () => void;
}

export interface IStoreState extends ITypingState, ITimerState, IInputRefState {}
