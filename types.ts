
export type AnswerState = 'idle' | 'correct' | 'incorrect';

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: Option[];
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
  target: string;
  decoys: string[];
}

// --- NEW SPECIFIC TYPES ---

export interface LeadIn {
  title: string;
  imageOrText: string;
  question: string;
}

export interface MeaningConcept {
  title: string;
  visualDescription: string;
  textEng: string;
  textRus: string;
  textUzb: string;
}

export interface Example {
  type: string;
  text: string;
}

export interface ReadingSection {
  title: string;
  passage: string;
  questions: QuizQuestion[];
}

export interface SpeakingPrompt {
  id: number;
  topic: string;
  question: string;
}

export interface Unit {
  id: string;
  level: 'B1' | 'B1+';
  title: string;
  description: string;
  
  // 1. Lead-in
  leadIn: LeadIn;
  
  // 2. Meaning & Visuals (MFP)
  meaning: {
    concepts: MeaningConcept[];
    formulas: { label: string; formula: string }[];
  };

  // 3. Concept Checking Quizzes (Separate Pages)
  conceptChecks: QuizQuestion[];

  // 4. Visuals (Timeline/Cline config)
  timelineMode: string;

  // 5. Examples
  examples: Example[];

  exercises: {
    // 6. Tests (Standard MCQs)
    tests: QuizQuestion[];
    
    // 7. Quizzes (More Practice)
    quizzes: QuizQuestion[];
    
    // 8. Kahoot (Gamified/Speed)
    kahoot: QuizQuestion[];
    
    // 9. Gap Fill
    gapFill: GapFill[];
    
    dragDrop?: {
      bucketA: string;
      bucketB: string;
      items: DragItem[];
    };
    crossword?: CrosswordClue[];
    snake?: SnakeLevel[];
  };

  // 10. Reading Passage
  reading: ReadingSection;

  // 11. Speaking
  speaking: SpeakingPrompt[];
}
