export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
}

export type MBTI_Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface AnswerOption {
  text: string;
  type: MBTI_Dimension;
}

export interface Question {
  text: string;
  options: [AnswerOption, AnswerOption];
}

export interface Answer {
  questionIndex: number;
  type: MBTI_Dimension;
}

export interface MBTIResult {
  type: string;
  title: string;
  description: string;
  color: string;
}