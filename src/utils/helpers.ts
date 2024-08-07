import {
  randomTexts,
  punctuationTexts,
  numbersTexts,
  numbersAndPunctuationTexts,
} from "../constants";

export const getRandomText = (includePunctuation: boolean, includeNumbers: boolean): string => {
  let texts: string[];
  switch (true) {
    case includePunctuation && includeNumbers:
      texts = numbersAndPunctuationTexts;
      break;
    case includeNumbers:
      texts = numbersTexts;
      break;
    case includePunctuation:
      texts = punctuationTexts;
      break;
    default:
      texts = randomTexts;
      break;
  }

  return texts[Math.floor(Math.random() * texts.length)];
};
