
import { Unit } from './types';

export const UNITS: Unit[] = [
  // ==========================================
  // OXFORD NAVIGATE PRE-INTERMEDIATE (B1)
  // ==========================================
  {
    id: 'Nav-B1-05',
    level: 'B1',
    title: 'Unit 5: Obligation & Necessity',
    description: 'Must, Have to, and Modal Verbs rules (Navigate B1)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning (Must vs Have to)', text: 'MUST is internal (speaker\'s opinion). HAVE TO is external (rules/laws).', visualDescription: 'Finger pointing 🫵 vs A Law Book 📘.' },
        { title: 'Meaning (Mustn\'t vs Don\'t have to)', text: 'MUSTN\'T is a prohibition (Don\'t do it!). DON\'T HAVE TO is no necessity (It\'s optional).', visualDescription: 'Stop Sign 🛑 vs Shrugging shoulders 🤷‍♂️.' },
        { title: 'Pronunciation', text: 'The "t" in "mustn\'t" is silent (/mʌsnt/). "Have to" is pronounced /hæftə/ (f sound).', visualDescription: 'Sound waves 🔊.' }
      ],
      formulas: [
        { type: 'Obligation', eng: 'S + must / have to + V1', rus: 'должен / приходится', uzb: 'shart / majbur' },
        { type: 'Prohibition', eng: 'S + mustn\'t + V1', rus: 'нельзя', uzb: 'mumkin emas' },
        { type: 'No Necessity', eng: 'S + don\'t/doesn\'t have to + V1', rus: 'не обязательно', uzb: 'shart emas' }
      ],
      examples: [
        { type: 'Must (Internal)', text: '"I must call my mum today. It\'s her birthday."' },
        { type: 'Have to (External)', text: '"You have to wear a uniform at this school."' },
        { type: 'No Necessity', text: '"It\'s Sunday. You don\'t have to wake up early."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '"You mustn\'t smoke here."', options: [{ id: 'a', text: 'You can smoke if you want', isCorrect: false }, { id: 'b', text: 'Do not smoke! It is forbidden', isCorrect: true }] },
        { id: 2, question: '"You don\'t have to help me."', options: [{ id: 'a', text: 'Do not help me!', isCorrect: false }, { id: 'b', text: 'It\'s not necessary, but optional', isCorrect: true }] },
        { id: 3, question: '"I have to study tonight." (Why?)', options: [{ id: 'a', text: 'Because I have an exam (External)', isCorrect: true }, { id: 'b', text: 'Because I feel like it', isCorrect: false }] },
        { id: 4, question: 'Past tense of "must"?', options: [{ id: 'a', text: 'musted', isCorrect: false }, { id: 'b', text: 'had to', isCorrect: true }] },
        { id: 5, question: 'Uzbek "You don\'t have to"', options: [{ id: 'a', text: 'Qilishing shart emas', isCorrect: true }, { id: 'b', text: 'Qilishing mumkin emas', isCorrect: false }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'You', sentenceAfter: 'be late. (mustn\'t)', hint: 'mustn\'t', correctAnswer: 'mustn\'t' },
        { id: 2, sentenceBefore: 'We', sentenceAfter: 'do homework every night. (have to)', hint: 'have to', correctAnswer: 'have to' },
        { id: 3, sentenceBefore: 'You', sentenceAfter: 'wear a uniform. (don\'t have to)', hint: 'don\'t have to', correctAnswer: 'don\'t have to' },
        { id: 4, sentenceBefore: '', sentenceAfter: 'you have to leave now? (Do)', hint: 'Do', correctAnswer: 'Do' },
        { id: 5, sentenceBefore: 'Drivers', sentenceAfter: 'stop at a red light. (must)', hint: 'must', correctAnswer: 'must' },
      ],
      dragDrop: {
        bucketA: 'Prohibition',
        bucketB: 'No Necessity',
        items: [
          { id: '1', text: 'You mustn\'t steal', category: 'A' },
          { id: '2', text: 'You don\'t have to wake up', category: 'B' },
          { id: '3', text: 'You mustn\'t talk', category: 'A' },
          { id: '4', text: 'You don\'t have to pay', category: 'B' },
          { id: '5', text: 'You mustn\'t touch fire', category: 'A' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Negative of must', answer: 'MUSTNT', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'I ___ to go', answer: 'HAVE', row: 0, col: 7 },
        { id: 3, direction: 'across', number: 3, clue: 'Do you have ___ wear a tie?', answer: 'TO', row: 2, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Strong rule', answer: 'MUST', row: 2, col: 3 },
      ],
      snake: [
        { prompt: '______ she have to work?', target: 'Does', decoys: ['Do', 'Is'] },
        { prompt: 'They ______ not have to go', target: 'Do', decoys: ['Does', 'Are'] },
      ]
    }
  },
  {
    id: 'Nav-B1-06',
    level: 'B1',
    title: 'Unit 6: Comparisons',
    description: 'Comparative & Superlative Adjectives (Navigate B1)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning', text: 'Comparatives compare 2 things. Superlatives compare 1 thing to a group (3+). Equality uses "as...as".', visualDescription: '2 sticks vs Podium 🏆.' },
        { title: 'Form (Spelling Rules)', text: 'Short: -er/-est. Long: more/most. Ends in Y: -ier/-iest. Big/Hot/Sad: Double consonant (Bigger).', visualDescription: 'Spelling Chart 📝.' },
        { title: 'Pronunciation', text: 'The "schwa" /ə/ sound in "-er" and "than". We say /bɪgə/ not /big-err/.', visualDescription: 'Mouth shape 👄.' }
      ],
      formulas: [
        { type: 'Short Adjectives', eng: 'S + be + adj-er + than + O', rus: 'Субъект + ... + -er + чем + ...', uzb: 'Ega + ... + -dan ko\'ra + sifat + -roq' },
        { type: 'Long Adjectives', eng: 'S + be + more + adj + than + O', rus: '... + более + adj + чем ...', uzb: '... -dan ko\'ra + ko\'proq + sifat' },
        { type: 'Superlatives', eng: 'S + be + the + adj-est / most + adj', rus: '... самый + adj', uzb: '... eng + sifat' }
      ],
      examples: [
        { type: 'Comparative', text: '"Ferrari is faster than Toyota."' },
        { type: 'Superlative', text: '"Burj Khalifa is the tallest building in the world."' },
        { type: 'Equality', text: '"Chemistry isn\'t as easy as Maths."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'We use comparative adjectives to compare ______ people or things.', options: [{ id: 'a', text: 'one', isCorrect: false }, { id: 'b', text: 'two', isCorrect: true }, { id: 'c', text: 'three or more', isCorrect: false }] },
        { id: 2, question: 'If an adjective ends in consonant + y, change y to ______.', options: [{ id: 'a', text: 'i and add -er', isCorrect: true }, { id: 'b', text: 'i and add -est', isCorrect: false }, { id: 'c', text: 'just add -er', isCorrect: false }] },
        { id: 3, question: 'The opposite of "more" is ______.', options: [{ id: 'a', text: 'least', isCorrect: false }, { id: 'b', text: 'fewer', isCorrect: false }, { id: 'c', text: 'less', isCorrect: true }] },
        { id: 4, question: '"Alan is as creative as David" means:', options: [{ id: 'a', text: 'Alan is more creative', isCorrect: false }, { id: 'b', text: 'They are equally creative', isCorrect: true }, { id: 'c', text: 'David is more creative', isCorrect: false }] },
        { id: 5, question: 'Which adjective is irregular?', options: [{ id: 'a', text: 'Bored', isCorrect: false }, { id: 'b', text: 'Good', isCorrect: true }, { id: 'c', text: 'Fast', isCorrect: false }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Type A people are', sentenceAfter: 'than Type B. (worried)', hint: 'worried', correctAnswer: 'more worried' },
        { id: 2, sentenceBefore: 'Type B people feel', sentenceAfter: 'with life. (satisfied)', hint: 'satisfied', correctAnswer: 'more satisfied' },
        { id: 3, sentenceBefore: 'Type A is generally', sentenceAfter: 'than Type B. (angry)', hint: 'angry', correctAnswer: 'angrier' },
        { id: 4, sentenceBefore: 'Type B is usually', sentenceAfter: 'than Type A. (calm)', hint: 'calm', correctAnswer: 'calmer' },
        { id: 5, sentenceBefore: 'Researchers think Type B has', sentenceAfter: 'health. (good)', hint: 'good', correctAnswer: 'better' },
      ],
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
    }
  },
  {
    id: 'Nav-B1-07',
    level: 'B1',
    title: 'Unit 7: Past vs Present Perfect',
    description: 'Finished time vs Experience (Navigate B1)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning (Past Simple)', text: 'A single, finished action in a finished time period. The "door is closed" to the past.', visualDescription: 'Timeline: A Red Box 🟥 completely in the past.' },
        { title: 'Meaning (Present Perfect)', text: 'Life experience up to now. Time is not important or not finished. The "door is open".', visualDescription: 'Timeline: Green Arrow 🟩 connecting Past to Now.' },
        { title: 'Pronunciation', text: 'Contractions are key: "I have" -> /aɪv/, "He has" -> /hiːz/. "Have" often becomes a weak sound /həv/.', visualDescription: 'Audio Wave 🌊.' }
      ],
      formulas: [
        { type: 'Past Simple', eng: 'S + V2 (past form)', rus: 'Действие завершено', uzb: 'Ega + fe\'l + -di' },
        { type: 'Present Perfect', eng: 'S + have/has + V3', rus: 'Результат важен', uzb: 'Ega + ... + -gan' }
      ],
      examples: [
        { type: 'Pres Perfect (Experience)', text: '"I have travelled to Japan twice." (In my life up to now)' },
        { type: 'Past Simple (Finished)', text: '"I travelled to Japan in 2015." (Specific past year)' },
        { type: 'Mix', text: '"Have you ever seen Star Wars? Yes, I saw it last night."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'We use Past Simple when we say exactly WHEN something happened.', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] },
        { id: 2, question: '"I have been to Paris" means I am there right now.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False', isCorrect: true }] },
        { id: 3, question: 'Which is correct?', options: [{ id: 'a', text: 'I have seen him yesterday', isCorrect: false }, { id: 'b', text: 'I saw him yesterday', isCorrect: true }] },
        { id: 4, question: 'V3 of "write" is:', options: [{ id: 'a', text: 'Wrote', isCorrect: false }, { id: 'b', text: 'Written', isCorrect: true }, { id: 'c', text: 'Writed', isCorrect: false }] },
        { id: 5, question: 'We use "yet" in:', options: [{ id: 'a', text: 'positive sentences', isCorrect: false }, { id: 'b', text: 'negative and question', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Have you ever', sentenceAfter: 'to Julia\'s house? (be)', hint: 'be', correctAnswer: 'been' },
        { id: 2, sentenceBefore: 'Yes, I', sentenceAfter: 'there last year. (go)', hint: 'go', correctAnswer: 'went' },
        { id: 3, sentenceBefore: 'The Jones family', sentenceAfter: 'a computer. (never/buy)', hint: 'buy', correctAnswer: 'have never bought' },
        { id: 4, sentenceBefore: '', sentenceAfter: 'at Da Vinci\'s before? (you/eat)', hint: 'you eat', correctAnswer: 'have you eaten' },
        { id: 5, sentenceBefore: 'I', sentenceAfter: 'the film two years ago. (see)', hint: 'see', correctAnswer: 'saw' },
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
    }
  },
  {
    id: 'Nav-B1-09',
    level: 'B1',
    title: 'Unit 9: First Conditional',
    description: 'If + Present + Will/Might (Navigate B1)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning (Chain Reaction)', text: 'A real possibility in the future. Action A (Condition) must happen for Action B (Result) to occur.', visualDescription: 'Dominoes falling 🧱->🧱.' },
        { title: 'Meaning (Certainty)', text: 'Use WILL for 100% certainty. Use MIGHT for 50% possibility (maybe).', visualDescription: 'Battery Icon 🔋.' },
        { title: 'Pronunciation', text: 'Intonation rises in the IF-clause, and falls in the result clause. "If it RAINS (↗), we will CANCEL (↘)."', visualDescription: 'Arrow Curves ⤴⤵.' }
      ],
      formulas: [
        { type: 'Rule', eng: 'If + Present Simple, ... will/might + V1', rus: 'Если + наст/буд, ... будущее', uzb: 'Agar + hozirgi, ... kelasi' },
        { type: 'Negative', eng: 'If ... don\'t/doesn\'t ..., ... won\'t ...', rus: 'Если не ..., то не ...', uzb: 'Agar ...masa, ...maydi' }
      ],
      examples: [
        { type: 'Standard', text: '"If you don\'t visit Lin, she won\'t be happy."' },
        { type: 'Possibility', text: '"If I meet him, I might discuss my pay."' },
        { type: 'Inverted', text: '"She will be upset if you arrive late."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '"If it will rain, we will stay home."', options: [{ id: 'a', text: 'Correct', isCorrect: false }, { id: 'b', text: 'Incorrect (If it rains)', isCorrect: true }] },
        { id: 2, question: 'I will call you if I _____ time.', options: [{ id: 'a', text: 'have', isCorrect: true }, { id: 'b', text: 'will have', isCorrect: false }] },
        { id: 3, question: 'We might be late if the traffic _____ bad.', options: [{ id: 'a', text: 'is', isCorrect: true }, { id: 'b', text: 'will be', isCorrect: false }] },
        { id: 4, question: 'First Conditional talks about:', options: [{ id: 'a', text: 'Imaginary situations', isCorrect: false }, { id: 'b', text: 'Real possibilities', isCorrect: true }] },
        { id: 5, question: 'Translate: "Agar yomg\'ir yog\'sa"', options: [{ id: 'a', text: 'If it rains', isCorrect: true }, { id: 'b', text: 'If it will rain', isCorrect: false }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'If you', sentenceAfter: 'someone new, they will answer. (meet)', hint: 'meet', correctAnswer: 'meet' },
        { id: 2, sentenceBefore: 'If you don\'t answer, people', sentenceAfter: 'you are rude. (might/think)', hint: 'might think', correctAnswer: 'might think' },
        { id: 3, sentenceBefore: 'We\'ll go visit Sarah if we', sentenceAfter: 'in London. (be)', hint: 'are', correctAnswer: 'are' },
        { id: 4, sentenceBefore: 'If someone', sentenceAfter: 'you, bring a gift. (invite)', hint: 'invites', correctAnswer: 'invites' },
        { id: 5, sentenceBefore: 'You', sentenceAfter: 'talk if you don\'t know the language. (won\'t/able)', hint: 'won\'t be able to', correctAnswer: 'won\'t be able to' },
      ],
      dragDrop: {
        bucketA: 'Condition (If...)',
        bucketB: 'Result (Will/Might...)',
        items: [
          { id: '1', text: 'If I miss the bus', category: 'A' },
          { id: '2', text: 'I will be late', category: 'B' },
          { id: '3', text: 'If you don\'t eat', category: 'A' },
          { id: '4', text: 'You will feel hungry', category: 'B' },
          { id: '5', text: 'If it rains', category: 'A' },
          { id: '6', text: 'We might cancel', category: 'B' },
          { id: '7', text: 'If he studies hard', category: 'A' },
          { id: '8', text: 'He will pass', category: 'B' },
          { id: '9', text: 'If you touch fire', category: 'A' },
          { id: '10', text: 'You will get burned', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Starts condition', answer: 'IF', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Uncertain modal', answer: 'MIGHT', row: 0, col: 4 },
        { id: 3, direction: 'across', number: 3, clue: 'Negative of will', answer: 'WONT', row: 3, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Tense after if', answer: 'SIMPLE', row: 2, col: 7 },
      ],
      snake: [
        { prompt: 'If she ___ (come)...', target: 'Comes', decoys: ['Will come', 'Came'] },
        { prompt: '...she ___ (be) happy.', target: 'Will be', decoys: ['Is', 'Are'] },
      ]
    }
  },
  {
    id: 'Nav-B1-10',
    level: 'B1',
    title: 'Unit 10: Used to',
    description: 'Past habits & states (Navigate B1)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning', text: 'Repeated actions or states in the past that are NOT true now. It highlights the contrast between "Then" and "Now".', visualDescription: 'Split screen: Horse (Past) vs Car (Now) 🐎🚗.' },
        { title: 'Form', text: 'Positive: used to + verb. Negative: didn\'t use to + verb. Question: Did you use to + verb?', visualDescription: 'Grammar blocks 🧱.' },
        { title: 'Pronunciation', text: 'Pronounced /juːst tʊ/. The "d" is silent because of the "t" in "to". It sounds like "use to".', visualDescription: 'Ear Icon 👂.' }
      ],
      formulas: [
        { type: 'Positive', eng: 'S + used to + V1', rus: 'Раньше делал', uzb: 'Ilgari ...ar edi' },
        { type: 'Negative', eng: 'didn\'t use to', rus: 'Раньше не делал', uzb: '...mas edi' },
        { type: 'Question', eng: 'Did you use to...?', rus: 'Ты раньше...?', uzb: '...ar edingizmi?' }
      ],
      examples: [
        { type: 'Positive', text: '"People used to send telegrams, now they send texts."' },
        { type: 'Negative', text: '"We didn\'t use to have a TV, but now we have three."' },
        { type: 'Question', text: '"Did you use to have long hair when you were a child?"' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '"I use to play football." (Past)', options: [{ id: 'a', text: 'Correct', isCorrect: false }, { id: 'b', text: 'Incorrect (used to)', isCorrect: true }] },
        { id: 2, question: '"Did you used to go?"', options: [{ id: 'a', text: 'Correct', isCorrect: false }, { id: 'b', text: 'Incorrect (use to)', isCorrect: true }] },
        { id: 3, question: '"I used to go, but now I don\'t."', options: [{ id: 'a', text: 'Correct', isCorrect: true }, { id: 'b', text: 'Incorrect', isCorrect: false }] },
        { id: 4, question: 'We use "used to" for:', options: [{ id: 'a', text: 'Now', isCorrect: false }, { id: 'b', text: 'Past habits stopped', isCorrect: true }] },
        { id: 5, question: 'Uzbek "I used to write"', options: [{ id: 'a', text: 'Men yozaman', isCorrect: false }, { id: 'b', text: 'Men yozar edim', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'People', sentenceAfter: 'news from market traders. (get)', hint: 'used to get', correctAnswer: 'used to get' },
        { id: 2, sentenceBefore: 'Roads', sentenceAfter: 'safe for travellers. (not/be)', hint: 'didn\'t use to be', correctAnswer: 'didn\'t use to be' },
        { id: 3, sentenceBefore: '', sentenceAfter: 'a newspaper every day? (you/read)', hint: 'Did you use to read', correctAnswer: 'Did you use to read' },
        { id: 4, sentenceBefore: 'My father', sentenceAfter: 'to the radio. (listen)', hint: 'used to listen', correctAnswer: 'used to listen' },
        { id: 5, sentenceBefore: 'Mobile phones', sentenceAfter: 'very expensive. (be)', hint: 'used to be', correctAnswer: 'used to be' },
      ],
      dragDrop: {
        bucketA: 'Past Habit (Used to)',
        bucketB: 'Present Habit',
        items: [
          { id: '1', text: 'I used to smoke', category: 'A' },
          { id: '2', text: 'I usually smoke', category: 'B' },
          { id: '3', text: 'She used to be shy', category: 'A' },
          { id: '4', text: 'They play every Sunday', category: 'B' },
          { id: '5', text: 'We didn\'t use to like', category: 'A' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'I ___ to live there', answer: 'USED', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Did you ___ to go?', answer: 'USE', row: 0, col: 0 },
        { id: 3, direction: 'across', number: 3, clue: 'Question aux', answer: 'DID', row: 3, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Did not ___ a car', answer: 'HAVE', row: 2, col: 4 },
      ],
      snake: [
        { prompt: 'Positive Sentence', target: 'Used to', decoys: ['Use to', 'Uses to'] },
        { prompt: 'Negative (didn\'t)', target: 'Use to', decoys: ['Used to', 'Using to'] },
      ]
    }
  },

  // ==========================================
  // OXFORD NAVIGATE INTERMEDIATE (B1+)
  // ==========================================
  {
    id: 'Nav-B1Plus-03',
    level: 'B1+',
    title: 'Unit 3: Future Forms',
    description: 'Prediction (Will/Might) & Future Continuous (Navigate B1+)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning (Will vs Might)', text: 'Will = 100% prediction based on opinion. Might = 50% possibility. ', visualDescription: 'Rocket 🚀 vs Cloud ☁️.' },
        { title: 'Meaning (Future Continuous)', text: 'An action in progress at a specific future time. "I will be flying" vs "I will fly".', visualDescription: 'Clock at 8PM 🕗 with Plane.' },
        { title: 'Pronunciation', text: 'Contraction \'ll is essential. "I\'ll be" /aɪl bi/. Weak form of "be".', visualDescription: 'Lip sync 🗣️.' }
      ],
      formulas: [
        { type: 'Future Continuous', eng: 'S + will be + V-ing', rus: 'Буду делать (процесс)', uzb: 'Qilayotgan bo\'laman' },
        { type: 'Prediction', eng: 'S + will/might + V1', rus: 'Субъект + не будет/возможно не', uzb: '... -maydi / -masligi mumkin' }
      ],
      examples: [
        { type: 'Prediction (100%)', text: '"Cars will fly in 2050."' },
        { type: 'Prediction (50%)', text: '"We might live on Mars."' },
        { type: 'Fut. Continuous', text: '"At 8pm tonight, I will be watching the game (don\'t call me!)."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'You are 100% sure it will rain.', options: [{ id: 'a', text: 'It might rain', isCorrect: false }, { id: 'b', text: 'It will rain', isCorrect: true }] },
        { id: 2, question: 'At 10:00 tomorrow, I _____ tennis. (In progress)', options: [{ id: 'a', text: 'will play', isCorrect: false }, { id: 'b', text: 'will be playing', isCorrect: true }] },
        { id: 3, question: '"Won\'t" is short for:', options: [{ id: 'a', text: 'Will not', isCorrect: true }, { id: 'b', text: 'Would not', isCorrect: false }] },
        { id: 4, question: 'Do we use "to" after will/might?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No (Bare infinitive)', isCorrect: true }] },
        { id: 5, question: 'Uzbek: "Ular kelishi mumkin"', options: [{ id: 'a', text: 'They will come', isCorrect: false }, { id: 'b', text: 'They might come', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Experts think airships', sentenceAfter: 'people again. (carry)', hint: 'will/might', correctAnswer: 'will carry' },
        { id: 2, sentenceBefore: 'Don\'t call me at 8. I', sentenceAfter: 'dinner. (cook)', hint: 'will be cooking', correctAnswer: 'will be cooking' },
        { id: 3, sentenceBefore: 'Airships', sentenceAfter: 'disappear this time. (won\'t)', hint: 'won\'t', correctAnswer: 'won\'t disappear' },
        { id: 4, sentenceBefore: 'This time next year, we', sentenceAfter: 'on a beach. (lie)', hint: 'will be lying', correctAnswer: 'will be lying' },
        { id: 5, sentenceBefore: 'Robots', sentenceAfter: 'passports. (will)', hint: 'check', correctAnswer: 'will check' },
      ],
      dragDrop: {
        bucketA: 'Simple Prediction',
        bucketB: 'Future Continuous',
        items: [
          { id: '1', text: 'We might use', category: 'A' },
          { id: '2', text: 'I will be sleeping', category: 'B' },
          { id: '3', text: 'Will serve', category: 'A' },
          { id: '4', text: 'Might be', category: 'A' },
          { id: '5', text: 'Will be flying', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Negative of will', answer: 'WONT', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Maybe/Possible', answer: 'MIGHT', row: 0, col: 4 },
        { id: 3, direction: 'across', number: 3, clue: 'I think... introduces a', answer: 'PREDICTION', row: 3, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Large balloons', answer: 'AIRSHIPS', row: 3, col: 7 },
      ],
      snake: [
        { prompt: 'I am sure (Future)', target: 'Will', decoys: ['Might', 'Maybe'] },
        { prompt: 'I haven\'t decided', target: 'Might', decoys: ['Will', 'Won\'t'] },
      ]
    }
  },
  {
    id: 'Nav-B1Plus-05',
    level: 'B1+',
    title: 'Unit 5: Second Conditional',
    description: 'Imaginary situations (If + Past, ... Would) (Navigate B1+)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning', text: 'Hypothetical or imaginary situations in the present/future. "If I had a million dollars..." (But I don\'t).', visualDescription: 'Dream Bubble 💭.' },
        { title: 'Form', text: 'IF + Past Simple, ... WOULD + Verb. (Past tense shows distance from reality, not past time).', visualDescription: 'Formula Board 📐.' },
        { title: 'Pronunciation', text: 'Contraction \'d is crucial. "I\'d go" /aɪd gəʊ/. Stress the result: "If I WON, I\'d BUY a boat."', visualDescription: 'Microphone 🎤.' }
      ],
      formulas: [
        { type: 'Formula', eng: 'If + Past Simple, ... would + V1', rus: 'Если бы + прош, ... бы', uzb: 'Agar + o\'tgan, ... -ar edi' },
        { type: 'Be Rule', eng: 'If I/he/she/it WERE...', rus: 'Всегда were', uzb: 'Hamma shaxslarga were' }
      ],
      examples: [
        { type: 'Hypothetical', text: '"If I were rich, I wouldn\'t work (but I am not rich)."' },
        { type: 'Advice', text: '"If I were you, I would study harder."' },
        { type: 'Impossible', text: '"If we found a cure for everything, we would live forever."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '"If I had wings, I would fly." Do I have wings?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 2, question: 'If I _____ rich...', options: [{ id: 'a', text: 'am', isCorrect: false }, { id: 'b', text: 'were', isCorrect: true }] },
        { id: 3, question: 'If I won, I _____ buy a boat.', options: [{ id: 'a', text: 'will', isCorrect: false }, { id: 'b', text: 'would', isCorrect: true }] },
        { id: 4, question: 'Trans: "Agar men sening o\'rningda bo\'lsam..."', options: [{ id: 'a', text: 'If I am you', isCorrect: false }, { id: 'b', text: 'If I were you', isCorrect: true }] },
        { id: 5, question: 'Which is correct?', options: [{ id: 'a', text: 'If I would know', isCorrect: false }, { id: 'b', text: 'If I knew', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'If people', sentenceAfter: 'better healthcare, they would live longer. (have)', hint: 'had', correctAnswer: 'had' },
        { id: 2, sentenceBefore: 'There', sentenceAfter: 'less rain if forests disappeared. (be)', hint: 'would be', correctAnswer: 'would be' },
        { id: 3, sentenceBefore: 'If we', sentenceAfter: 'a cure, population would grow. (find)', hint: 'found', correctAnswer: 'found' },
        { id: 4, sentenceBefore: 'Countries wouldn\'t war if we', sentenceAfter: 'stronger orgs. (have)', hint: 'had', correctAnswer: 'had' },
        { id: 5, sentenceBefore: 'If we', sentenceAfter: 'in countryside, we\'d exercise more. (live)', hint: 'lived', correctAnswer: 'lived' },
      ],
      dragDrop: {
        bucketA: 'Condition (If)',
        bucketB: 'Result (Would)',
        items: [
          { id: '1', text: 'If I were President', category: 'A' },
          { id: '2', text: 'I would change laws', category: 'B' },
          { id: '3', text: 'If I had spaceship', category: 'A' },
          { id: '4', text: 'I would go to Mars', category: 'B' },
          { id: '5', text: 'If unemployment fell', category: 'A' },
          { id: '6', text: 'It would be great', category: 'B' },
          { id: '7', text: 'If I didn\'t like it', category: 'A' },
          { id: '8', text: 'I wouldn\'t watch', category: 'B' },
          { id: '9', text: 'If we had water', category: 'A' },
          { id: '10', text: 'Fewer diseases', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Modal for result', answer: 'WOULD', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Past of find', answer: 'FOUND', row: 0, col: 6 },
        { id: 3, direction: 'across', number: 3, clue: 'If I ___ you', answer: 'WERE', row: 4, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Past of have', answer: 'HAD', row: 3, col: 8 },
      ],
      snake: [
        { prompt: 'If she ___ (know)...', target: 'Knew', decoys: ['Knows', 'Would know'] },
        { prompt: 'If we ___ (can)...', target: 'Could', decoys: ['Can', 'Canned'] },
      ]
    }
  },
  {
    id: 'Nav-B1Plus-06',
    level: 'B1+',
    title: 'Unit 6: The Passive',
    description: 'Present & Past Passive (Navigate B1+)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning', text: 'We use Passive when the Object (Receiver) is more important than the Subject (Doer). The agent is often unknown or obvious.', visualDescription: 'Focus Arrow ⬅️.' },
        { title: 'Form', text: 'BE + Past Participle (V3). The "be" verb changes tense (is, was, will be).', visualDescription: 'Lego Blocks 🧱.' },
        { title: 'Pronunciation', text: 'Stress the main verb (V3). "It was MADE in CHINA." /wəz/ is usually weak.', visualDescription: 'Stress Mark ˈ.' }
      ],
      formulas: [
        { type: 'Formula', eng: 'Subject + BE + V3', rus: 'Быть + Причастие', uzb: 'Fe\'l + -l/-n' }
      ],
      examples: [
        { type: 'Present', text: '"The vegetables aren\'t cooked enough (by the chef)."' },
        { type: 'Past', text: '"The menu was designed by the chef."' },
        { type: 'Question', text: '"When was butter first made?"' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '"Shakespeare wrote Hamlet." This is:', options: [{ id: 'a', text: 'Active', isCorrect: true }, { id: 'b', text: 'Passive', isCorrect: false }] },
        { id: 2, question: '"Hamlet was written by Shakespeare." This is:', options: [{ id: 'a', text: 'Active', isCorrect: false }, { id: 'b', text: 'Passive', isCorrect: true }] },
        { id: 3, question: 'The car _____ in Germany.', options: [{ id: 'a', text: 'made', isCorrect: false }, { id: 'b', text: 'is made', isCorrect: true }] },
        { id: 4, question: 'They _____ invited last night.', options: [{ id: 'a', text: 'were', isCorrect: true }, { id: 'b', text: 'are', isCorrect: false }] },
        { id: 5, question: 'Introduced _____ someone.', options: [{ id: 'a', text: 'with', isCorrect: false }, { id: 'b', text: 'by', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Fresh pizza', sentenceAfter: 'in the supermarket. (sell)', hint: 'is sold', correctAnswer: 'is sold' },
        { id: 2, sentenceBefore: 'Tomatoes', sentenceAfter: 'in 15th century. (introduce)', hint: 'were introduced', correctAnswer: 'were introduced' },
        { id: 3, sentenceBefore: 'The restaurant', sentenceAfter: 'by celebrities. (visit)', hint: 'was visited', correctAnswer: 'was visited' },
        { id: 4, sentenceBefore: 'Bottles', sentenceAfter: 'in cans usually. (sell)', hint: 'are sold', correctAnswer: 'are sold' },
        { id: 5, sentenceBefore: 'The sauce', sentenceAfter: 'with honey. (make)', hint: 'is made', correctAnswer: 'is made' },
      ],
      dragDrop: {
        bucketA: 'Present Passive',
        bucketB: 'Past Passive',
        items: [
          { id: '1', text: 'Is sold', category: 'A' },
          { id: '2', text: 'Was written', category: 'B' },
          { id: '3', text: 'Are made', category: 'A' },
          { id: '4', text: 'Were introduced', category: 'B' },
          { id: '5', text: 'Is cleaned', category: 'A' },
          { id: '6', text: 'Was visited', category: 'B' },
          { id: '7', text: 'Are grown', category: 'A' },
          { id: '8', text: 'Were taken', category: 'B' },
          { id: '9', text: 'Is spoken', category: 'A' },
          { id: '10', text: 'Was given', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'V3 of make', answer: 'MADE', row: 1, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'The letter was ___', answer: 'WRITTEN', row: 0, col: 5 },
        { id: 3, direction: 'across', number: 3, clue: 'Agent preposition', answer: 'BY', row: 4, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'V3 of give', answer: 'GIVEN', row: 1, col: 2 },
      ],
      snake: [
        { prompt: 'Passive of EAT', target: 'Eaten', decoys: ['Ate', 'Eating'] },
        { prompt: 'Passive of TAKE', target: 'Taken', decoys: ['Took', 'Taked'] },
      ]
    }
  },
  {
    id: 'Nav-B1Plus-10',
    level: 'B1+',
    title: 'Unit 10: Gerunds & Infinitives',
    description: 'Verb Patterns: -ing vs to + verb (Navigate B1+)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Meaning (Gerund)', text: '-ing is used as a Noun (Subject), after prepositions, or after certain verbs (enjoy, finish, mind).', visualDescription: 'Noun Badge 📛.' },
        { title: 'Meaning (Infinitive)', text: 'To + Verb is used for PURPOSE (why?), after adjectives, or specific verbs (want, hope, need).', visualDescription: 'Target Arrow 🎯.' },
        { title: 'Pronunciation', text: '"to" is usually weak /tə/. "ing" is /ɪŋ/ (nasal sound).', visualDescription: 'Nasal N 👃.' }
      ],
      formulas: [
        { type: 'Gerund', eng: 'Verb + ing', rus: 'Глагол-существительное', uzb: 'Harakat nomi (-ish)' },
        { type: 'Infinitive', eng: 'to + V1', rus: 'чтобы + инф', uzb: '-ish uchun' }
      ],
      examples: [
        { type: 'Gerund', text: '"Swimming is good for you (Subject). I enjoy swimming (Object)."' },
        { type: 'Infinitive', text: '"I went to the shop to buy milk (Purpose)."' },
        { type: 'Pattern', text: '"Thank you for helping (Preposition)." / "I promise to help (Verb Pattern)."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I am interested in _____ (After prep)', options: [{ id: 'a', text: 'learn', isCorrect: false }, { id: 'b', text: 'learning', isCorrect: true }] },
        { id: 2, question: 'I went to the shop _____ milk. (Purpose)', options: [{ id: 'a', text: 'for buy', isCorrect: false }, { id: 'b', text: 'to buy', isCorrect: true }] },
        { id: 3, question: 'Which verb is followed by -ing?', options: [{ id: 'a', text: 'Decide', isCorrect: false }, { id: 'b', text: 'Enjoy', isCorrect: true }, { id: 'c', text: 'Want', isCorrect: false }] },
        { id: 4, question: 'It is important _____ polite.', options: [{ id: 'a', text: 'to be', isCorrect: true }, { id: 'b', text: 'being', isCorrect: false }] },
        { id: 5, question: 'Uzbek "Reading"', options: [{ id: 'a', text: 'O\'qimoq', isCorrect: false }, { id: 'b', text: 'O\'qish', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Habit of', sentenceAfter: 'old food. (put)', hint: 'putting', correctAnswer: 'putting' },
        { id: 2, sentenceBefore: 'I\'m writing', sentenceAfter: 'for a job. (ask)', hint: 'to ask', correctAnswer: 'to ask' },
        { id: 3, sentenceBefore: 'Stay healthy by', sentenceAfter: 'vegetables. (eat)', hint: 'eating', correctAnswer: 'eating' },
        { id: 4, sentenceBefore: 'Thinking of', sentenceAfter: 'pizza? (have)', hint: 'having', correctAnswer: 'having' },
        { id: 5, sentenceBefore: 'They want', sentenceAfter: 'a cure. (find)', hint: 'to find', correctAnswer: 'to find' },
      ],
      dragDrop: {
        bucketA: 'Followed by -ing',
        bucketB: 'Followed by \'to\'',
        items: [
          { id: '1', text: 'Enjoy', category: 'A' },
          { id: '2', text: 'Want', category: 'B' },
          { id: '3', text: 'Avoid', category: 'A' },
          { id: '4', text: 'Decide', category: 'B' },
          { id: '5', text: 'Finish', category: 'A' },
          { id: '6', text: 'Hope', category: 'B' },
          { id: '7', text: 'Mind', category: 'A' },
          { id: '8', text: 'Promise', category: 'B' },
          { id: '9', text: 'Practise', category: 'A' },
          { id: '10', text: 'Need', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Stop ___', answer: 'TALKING', row: 2, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Don\'t ___ to call', answer: 'FORGET', row: 0, col: 4 },
        { id: 3, direction: 'across', number: 3, clue: 'I enjoy ___', answer: 'WATCHING', row: 5, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: '-ing subject', answer: 'GERUND', row: 1, col: 8 },
      ],
      snake: [
        { prompt: 'Good at...', target: 'Dancing', decoys: ['Dance', 'To dance'] },
        { prompt: 'I love...', target: 'Swimming', decoys: ['Swim', 'Swam'] },
      ]
    }
  },
];
