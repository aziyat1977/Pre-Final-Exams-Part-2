export type AnswerState = 'idle' | 'correct' | 'incorrect';

export interface QuizQuestion {
  id: number;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
}

export interface GapFill {
  id: number;
  sentenceBefore: string;
  sentenceAfter: string;
  hint: string;
  correctAnswer: string;
}

export interface DragItem {
  id: string;
  text: string;
  category: 'A' | 'B'; 
}

export interface DragBucket {
  id: 'A' | 'B';
  label: string;
  items: DragItem[];
}

export interface CrosswordClue {
  id: number;
  direction: 'across' | 'down';
  number: number;
  clue: string;
  answer: string;
  row: number;
  col: number;
}

export interface SnakeLevel {
  prompt: string;
  target: string; // The correct word to eat
  decoys: string[]; // Wrong words
}

export interface TheorySection {
  title: string;
  concepts: { title: string; text: string; visualDescription: string }[];
  formulas: { type: string; eng: string; rus: string; uzb: string }[];
  examples: { type: string; text: string }[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  theory: TheorySection;
  exercises: {
    quiz: QuizQuestion[];
    gapFill: GapFill[];
    dragDrop: {
      bucketA: string;
      bucketB: string;
      items: DragItem[];
    };
    crossword: CrosswordClue[];
    snake: SnakeLevel[];
  };
}