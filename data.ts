
import { Unit } from './types';

export const UNITS: Unit[] = [
  // ==========================================
  // UNIT 6: COMPARISONS (The Gold Standard)
  // ==========================================
  {
    id: 'Nav-B1-06',
    level: 'B1',
    title: 'Unit 6: Comparisons',
    description: 'Comparative (-er/more) & Superlative (-est/most) Adjectives; (not) as...as.',
    timelineMode: 'comparison_scale',
    
    // 1. Lead-in
    leadIn: {
      title: 'Who is Taller?',
      imageOrText: 'Imagine two stick figures. One is named Bob (180cm), one is named Tim (160cm).',
      question: 'How do we describe the difference between Bob and Tim?'
    },

    // 2. Meaning & Visuals
    meaning: {
      concepts: [
        {
          title: 'Comparative',
          visualDescription: 'Two stick figures: One tall, one short. Arrow from short to tall.',
          textEng: 'Comparing 2 distinct things/people.',
          textRus: 'Сравнение двух разных вещей/людей.',
          textUzb: '2 xil narsa/shaxsni taqqoslash.'
        },
        {
          title: 'Superlative',
          visualDescription: 'A podium with 1st, 2nd, 3rd place. 1st place highlighted.',
          textEng: 'Comparing 1 thing against a whole group (3+).',
          textRus: 'Сравнение одного предмета с целой группой (3+).',
          textUzb: '1 narsani butun guruh (3+) bilan taqqoslash.'
        },
        {
          title: 'Equality/Inequality',
          visualDescription: 'A balance scale. (as...as) = balanced. (not as...as) = unbalanced.',
          textEng: 'Showing two things are equal or not equal.',
          textRus: 'Показывает, что две вещи равны или не равны.',
          textUzb: 'Ikki narsaning teng yoki teng emasligini ko\'rsatish.'
        }
      ],
      formulas: [
        { label: 'Short Adjectives', formula: 'Sub + be + adj-er + than + Obj' },
        { label: 'Long Adjectives', formula: 'Sub + be + more + adj + than + Obj' },
        { label: 'Superlatives', formula: 'Sub + be + the + adj-est / most + adj' }
      ]
    },

    // 3. Concept Check Quizzes (Separate Pages)
    conceptChecks: [
      { id: 1, question: 'We use comparative adjectives to compare ______ people or things.', options: [{ id: 'a', text: 'one', isCorrect: false }, { id: 'b', text: 'two', isCorrect: true }, { id: 'c', text: 'three or more', isCorrect: false }] },
      { id: 2, question: 'If an adjective ends in consonant + y (e.g. happy), we change y to ______.', options: [{ id: 'a', text: 'i and add -er', isCorrect: true }, { id: 'b', text: 'i and add -est', isCorrect: false }, { id: 'c', text: 'just add -er', isCorrect: false }] },
      { id: 3, question: '"Alan is as creative as David" means:', options: [{ id: 'a', text: 'Alan is more creative', isCorrect: false }, { id: 'b', text: 'They are equally creative', isCorrect: true }, { id: 'c', text: 'David is more creative', isCorrect: false }] },
    ],

    // 5. Examples
    examples: [
      { type: 'Comparative', text: '"Pilar is smarter than I am."' },
      { type: 'Superlative', text: '"Mrs Fiore is the most patient person I\'ve ever met."' },
      { type: 'Equality (Negative)', text: '"Evan isn\'t as confident as me."' }
    ],

    exercises: {
      // 6. Tests (General Practice)
      tests: [
        { id: 1, question: 'The opposite of "more" is ______.', options: [{ id: 'a', text: 'least', isCorrect: false }, { id: 'b', text: 'fewer', isCorrect: false }, { id: 'c', text: 'less', isCorrect: true }] },
        { id: 2, question: 'Which adjective is irregular?', options: [{ id: 'a', text: 'Bored', isCorrect: false }, { id: 'b', text: 'Good', isCorrect: true }, { id: 'c', text: 'Fast', isCorrect: false }] },
        { id: 3, question: 'Mount Everest is _____ mountain in the world.', options: [{ id: 'a', text: 'higher', isCorrect: false }, { id: 'b', text: 'the highest', isCorrect: true }, { id: 'c', text: 'most high', isCorrect: false }] },
      ],
      
      // 7. Quizzes (More Practice)
      quizzes: [
        { id: 1, question: 'He is _____ than his brother.', options: [{ id: 'a', text: 'tall', isCorrect: false }, { id: 'b', text: 'taller', isCorrect: true }] },
        { id: 2, question: 'This is the _____ day of my life.', options: [{ id: 'a', text: 'happiest', isCorrect: true }, { id: 'b', text: 'happyest', isCorrect: false }] },
        { id: 3, question: 'Ferrari is _____ than a Toyota.', options: [{ id: 'a', text: 'expensive', isCorrect: false }, { id: 'b', text: 'more expensive', isCorrect: true }] },
      ],

      // 8. Kahoot (Speed/Game)
      kahoot: [
        { id: 1, question: 'FAST -> ???', options: [{ id: 'a', text: 'More fast', isCorrect: false }, { id: 'b', text: 'Faster', isCorrect: true }] },
        { id: 2, question: 'GOOD -> ???', options: [{ id: 'a', text: 'Gooder', isCorrect: false }, { id: 'b', text: 'Better', isCorrect: true }] },
        { id: 3, question: 'BAD -> ???', options: [{ id: 'a', text: 'Badder', isCorrect: false }, { id: 'b', text: 'Worse', isCorrect: true }] },
      ],

      // 9. Gap Fill
      gapFill: [
        { id: 1, sentenceBefore: 'Type A people are', sentenceAfter: 'than Type B. (worried)', hint: 'more worried', correctAnswer: 'more worried' },
        { id: 2, sentenceBefore: 'Type B people feel', sentenceAfter: 'with life. (satisfied)', hint: 'more satisfied', correctAnswer: 'more satisfied' },
        { id: 3, sentenceBefore: 'Type A is generally', sentenceAfter: 'than Type B. (angry)', hint: 'angrier', correctAnswer: 'angrier' },
        { id: 4, sentenceBefore: 'Type B is usually', sentenceAfter: 'than Type A. (calm)', hint: 'calmer', correctAnswer: 'calmer' },
        { id: 5, sentenceBefore: 'Type B has', sentenceAfter: 'health. (good)', hint: 'better', correctAnswer: 'better' },
      ],

      // Extras for gamification
      dragDrop: {
        bucketA: 'Comparative',
        bucketB: 'Superlative',
        items: [
          { id: '1', text: 'Lazier', category: 'A' },
          { id: '2', text: 'The nicest', category: 'B' },
          { id: '3', text: 'More helpful', category: 'A' },
          { id: '4', text: 'The most fantastic', category: 'B' },
          { id: '5', text: 'Worse', category: 'A' },
          { id: '6', text: 'The least shy', category: 'B' },
          { id: '7', text: 'Hotter', category: 'A' },
          { id: '8', text: 'The furthest', category: 'B' },
          { id: '9', text: 'Further', category: 'A' },
          { id: '10', text: 'The best', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'down', number: 1, clue: 'Comparative of bad', answer: 'WORSE', row: 0, col: 2 },
        { id: 2, direction: 'across', number: 2, clue: 'Superlative of far', answer: 'FURTHEST', row: 2, col: 0 },
        { id: 3, direction: 'down', number: 3, clue: 'Opposite of most', answer: 'LEAST', row: 2, col: 6 },
        { id: 4, direction: 'across', number: 4, clue: 'happy -> ______', answer: 'HAPPIER', row: 5, col: 1 },
      ],
      snake: [
        { prompt: 'Base: BEAUTIFUL', target: 'More beautiful', decoys: ['Beautifuler', 'Beautifulest'] },
        { prompt: 'Base: BAD', target: 'Worse', decoys: ['Badder', 'Baddest'] },
      ]
    },

    // 10. Reading Passage
    reading: {
      title: 'Personality Types: A vs B',
      passage: "Psychologists often describe two personality types: Type A and Type B. Type A people are very competitive and self-critical. They strive toward goals without feeling a sense of joy in their efforts or accomplishments. Type B people are more relaxed, reflective, and not as competitive as Type A. \n\nResearch suggests that Type A individuals are more prone to heart disease than Type B individuals, possibly due to higher stress levels. While Type A people might seem more productive, Type B people are often more creative because they allow themselves time to think. In modern society, Type A behavior is often encouraged, but Type B traits are becoming more valued in collaborative environments.",
      questions: [
        { id: 1, question: 'Type A people are usually:', options: [{ id: 'a', text: 'Relaxed', isCorrect: false }, { id: 'b', text: 'Competitive', isCorrect: true }] },
        { id: 2, question: 'Who is more likely to have heart disease?', options: [{ id: 'a', text: 'Type A', isCorrect: true }, { id: 'b', text: 'Type B', isCorrect: false }] },
        { id: 3, question: 'Type B people are often more:', options: [{ id: 'a', text: 'Stressed', isCorrect: false }, { id: 'b', text: 'Creative', isCorrect: true }] },
        { id: 4, question: 'Which behavior is often encouraged in society?', options: [{ id: 'a', text: 'Type A', isCorrect: true }, { id: 'b', text: 'Type B', isCorrect: false }] },
        { id: 5, question: 'Type B people are not as _____ as Type A.', options: [{ id: 'a', text: 'Happy', isCorrect: false }, { id: 'b', text: 'Competitive', isCorrect: true }] },
      ]
    },

    // 11. Speaking
    speaking: [
      { id: 1, topic: 'Self-Reflection', question: 'Do you think you are more Type A or Type B? Why? Compare yourself to a friend.' },
      { id: 2, topic: 'Changes', question: 'Compare your life now to your life 5 years ago. What is better? What is harder?' },
      { id: 3, topic: 'Technology', question: 'Are smartphones making people smarter or lazier? Compare life with and without them.' }
    ]
  },

  // ==========================================
  // UNIT 7: PAST SIMPLE VS PRESENT PERFECT
  // ==========================================
  {
    id: 'Nav-B1-07',
    level: 'B1',
    title: 'Unit 7: Past vs Present Perfect',
    description: 'Finished time (Past Simple) vs Unfinished time/Experience (Present Perfect).',
    timelineMode: 'perfect_vs_simple',

    // 1. Lead-in
    leadIn: {
      title: 'The Closed Door vs The Open Door',
      imageOrText: 'Imagine 2010. It is finished (Closed). Imagine your whole life until now (Open).',
      question: 'Which tense connects the past to the present?'
    },

    // 2. Meaning & Visuals
    meaning: {
      concepts: [
        {
          title: 'Past Simple',
          visualDescription: 'A calendar showing "2011" crossed out ❌.',
          textEng: 'Action happened in a finished time period. The door is closed.',
          textRus: 'Действие произошло в законченный период времени.',
          textUzb: 'Harakat tugallangan vaqt ichida sodir bo\'lgan.'
        },
        {
          title: 'Present Perfect',
          visualDescription: 'A timeline arrow starting in the past and touching "NOW".',
          textEng: 'Experience in your life up to now. The door is still open.',
          textRus: 'Опыт в вашей жизни до настоящего момента.',
          textUzb: 'Hozirgacha bo\'lgan hayotiy tajriba.'
        },
      ],
      formulas: [
        { label: 'Past Simple', formula: 'Sub + V2 (ed/irregular)' },
        { label: 'Present Perfect', formula: 'Sub + have/has + V3' }
      ]
    },

    // 3. Concept Checks
    conceptChecks: [
      { id: 1, question: 'We use Past Simple when we say exactly WHEN something happened.', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] },
      { id: 2, question: '"I have been to Paris" means I am in Paris right now.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False (Experience)', isCorrect: true }] },
      { id: 3, question: 'We use "yet" in:', options: [{ id: 'a', text: 'Positive sentences', isCorrect: false }, { id: 'b', text: 'Negative and Question', isCorrect: true }] },
    ],

    // 5. Examples
    examples: [
      { type: 'Pres Perfect', text: '"I have travelled around the world." (Experience)' },
      { type: 'Past Simple', text: '"He didn\'t meet our cousins in 2011." (Specific time)' },
      { type: 'Mix', text: '"Have you ever been to India? No, I\'ve never been there."' }
    ],

    exercises: {
      // 6. Tests
      tests: [
        { id: 1, question: 'Which sentence is correct?', options: [{ id: 'a', text: 'I have seen him yesterday.', isCorrect: false }, { id: 'b', text: 'I saw him yesterday.', isCorrect: true }] },
        { id: 2, question: 'V3 of "write" is:', options: [{ id: 'a', text: 'Wrote', isCorrect: false }, { id: 'b', text: 'Written', isCorrect: true }] },
        { id: 3, question: 'She _____ arrive yet.', options: [{ id: 'a', text: 'hasn\'t', isCorrect: true }, { id: 'b', text: 'didn\'t', isCorrect: false }] },
      ],

      // 7. Quizzes
      quizzes: [
        { id: 1, question: 'I _____ to the cinema last night.', options: [{ id: 'a', text: 'went', isCorrect: true }, { id: 'b', text: 'have gone', isCorrect: false }] },
        { id: 2, question: '_____ you ever eaten sushi?', options: [{ id: 'a', text: 'Did', isCorrect: false }, { id: 'b', text: 'Have', isCorrect: true }] },
        { id: 3, question: 'We _____ him for 10 years.', options: [{ id: 'a', text: 'know', isCorrect: false }, { id: 'b', text: 'have known', isCorrect: true }] },
      ],

      // 8. Kahoot
      kahoot: [
        { id: 1, question: 'Time marker: YESTERDAY -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Present Perfect', isCorrect: false }] },
        { id: 2, question: 'Time marker: EVER -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: false }, { id: 'b', text: 'Present Perfect', isCorrect: true }] },
        { id: 3, question: 'Time marker: IN 1999 -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Present Perfect', isCorrect: false }] },
      ],

      // 9. Gap Fill
      gapFill: [
        { id: 1, sentenceBefore: 'Have you ever', sentenceAfter: 'to Julia\'s house? (be)', hint: 'been', correctAnswer: 'been' },
        { id: 2, sentenceBefore: 'Yes, I', sentenceAfter: 'there last year. (go)', hint: 'went', correctAnswer: 'went' },
        { id: 3, sentenceBefore: 'The Jones family', sentenceAfter: 'a computer. (never/buy)', hint: 'have never bought', correctAnswer: 'have never bought' },
        { id: 4, sentenceBefore: '', sentenceAfter: 'at Da Vinci\'s before? (you/eat)', hint: 'have you eaten', correctAnswer: 'have you eaten' },
        { id: 5, sentenceBefore: 'I', sentenceAfter: 'the film two years ago. (see)', hint: 'saw', correctAnswer: 'saw' },
      ],
      
      dragDrop: {
        bucketA: 'Past Simple',
        bucketB: 'Pres Perfect',
        items: [
          { id: '1', text: 'Yesterday', category: 'A' },
          { id: '2', text: 'Just', category: 'B' },
          { id: '3', text: 'In 1999', category: 'A' },
          { id: '4', text: 'Already', category: 'B' },
          { id: '5', text: 'Last night', category: 'A' },
          { id: '6', text: 'Yet', category: 'B' },
          { id: '7', text: 'When I was 10', category: 'A' },
          { id: '8', text: 'Ever', category: 'B' },
          { id: '9', text: 'Three days ago', category: 'A' },
          { id: '10', text: 'Recently', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'V3 of do', answer: 'DONE', row: 1, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Helper for he/she', answer: 'HAS', row: 0, col: 2 },
        { id: 3, direction: 'across', number: 3, clue: 'Negative finish: not ...', answer: 'YET', row: 3, col: 2 },
        { id: 4, direction: 'down', number: 4, clue: 'Past of buy', answer: 'BOUGHT', row: 1, col: 5 },
      ],
      snake: [
        { prompt: 'V3 of SPEAK', target: 'Spoken', decoys: ['Spoke', 'Speaked'] },
        { prompt: 'V2 of GO', target: 'Went', decoys: ['Gone', 'Goed'] },
      ]
    },

    // 10. Reading
    reading: {
      title: 'My Travel Diaries',
      passage: "I have always loved travelling. I started when I was 18. In 2015, I went to Japan. It was amazing. I ate sushi and saw Mount Fuji. I haven't been to China yet, but I want to go next year. \n\nMy friend John has visited 20 countries so far. Last month, he travelled to Brazil. He didn't like the weather because it rained every day. We have planned a trip together for next summer. We have already bought the tickets.",
      questions: [
        { id: 1, question: 'When did the narrator start travelling?', options: [{ id: 'a', text: 'Recently', isCorrect: false }, { id: 'b', text: 'At 18', isCorrect: true }] },
        { id: 2, question: 'Has the narrator been to China?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 3, question: 'How many countries has John visited?', options: [{ id: 'a', text: '20', isCorrect: true }, { id: 'b', text: '18', isCorrect: false }] },
        { id: 4, question: 'Why didn\'t John like Brazil?', options: [{ id: 'a', text: 'The food', isCorrect: false }, { id: 'b', text: 'The rain', isCorrect: true }] },
        { id: 5, question: 'Have they bought tickets for the next trip?', options: [{ id: 'a', text: 'Yes', isCorrect: true }, { id: 'b', text: 'No', isCorrect: false }] },
      ]
    },

    // 11. Speaking
    speaking: [
      { id: 1, topic: 'Experiences', question: 'Have you ever done something dangerous? Tell me about it.' },
      { id: 2, topic: 'Recent Events', question: 'What did you do last weekend? Use Past Simple.' },
      { id: 3, topic: 'Accomplishments', question: 'What have you achieved in your life so far?' }
    ]
  },
];
