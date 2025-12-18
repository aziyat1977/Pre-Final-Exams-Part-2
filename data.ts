import { Unit } from './types';

export const UNITS: Unit[] = [
  {
    id: '6.1',
    title: 'Unit 6.1: Making Comparisons',
    description: 'Comparative & Superlative Adjectives',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Comparative', text: 'Comparing 2 distinct things/people.', visualDescription: 'Two stick figures: one tall, one short.' },
        { title: 'Superlative', text: 'Comparing 1 thing against a whole group (3+).', visualDescription: 'Podium with 1st, 2nd, 3rd.' },
        { title: 'Equality', text: 'Showing things are equal (as...as) or not.', visualDescription: 'A balance scale.' }
      ],
      formulas: [
        { type: 'Short Adjectives', eng: 'S + be + adj-er + than + O', rus: 'Субъект + ... + -er + чем + ...', uzb: 'Ega + ... + -dan ko\'ra + sifat + -roq' },
        { type: 'Long Adjectives', eng: 'S + be + more + adj + than + O', rus: '... + более + adj + чем ...', uzb: '... -dan ko\'ra + ko\'proq + sifat' },
        { type: 'Superlatives', eng: 'S + be + the + adj-est / most + adj', rus: '... самый + adj', uzb: '... eng + sifat' }
      ],
      examples: [
        { type: 'Comparative', text: '"Pilar is smarter than I am."' },
        { type: 'Superlative', text: '"Mrs Fiore is the most patient person I\'ve ever met."' },
        { type: 'Equality', text: '"Evan isn\'t as confident as me."' }
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
    id: '6.2',
    title: 'Unit 6.2: Present Perfect vs Past Simple',
    description: 'Finished time vs Unfinished time/Experience',
    theory: {
      title: 'Meaning & Form',
      concepts: [
        { title: 'Past Simple', text: 'Action happened in finished time. Door is closed.', visualDescription: 'Calendar with 2011 crossed out.' },
        { title: 'Present Perfect', text: 'Experience up to now. Time unimportant. Door open.', visualDescription: 'Timeline arrow to NOW.' }
      ],
      formulas: [
        { type: 'Past Simple', eng: 'S + V2 (past form)', rus: 'Действие завершено', uzb: 'Ega + fe\'l + -di' },
        { type: 'Present Perfect', eng: 'S + have/has + V3', rus: 'Результат важен', uzb: 'Ega + ... + -gan' }
      ],
      examples: [
        { type: 'Pres Perfect', text: '"I have travelled around the world."' },
        { type: 'Past Simple', text: '"He didn\'t meet our cousins in 2011."' },
        { type: 'Mix', text: '"Have you ever been to India? No, I\'ve never been."' }
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
    id: '7.1',
    title: 'Unit 7.1: Prediction (will, might)',
    description: 'Future predictions. Certainty vs Possibility.',
    theory: {
      title: 'Meaning & Form',
      concepts: [
        { title: 'Will / Won\'t', text: 'Sure or strong opinion (100%).', visualDescription: 'Battery full.' },
        { title: 'Might / Might not', text: 'Not sure. Possible (50%).', visualDescription: 'Battery half.' }
      ],
      formulas: [
        { type: 'Positive', eng: 'S + will/might + V1', rus: 'Субъект + будущее/возможно', uzb: '... -adi / -ishi mumkin' },
        { type: 'Negative', eng: 'S + won\'t/might not + V1', rus: 'Субъект + не будет/возможно не', uzb: '... -maydi / -masligi mumkin' }
      ],
      examples: [
        { type: 'Certain', text: '"Airships will carry people."' },
        { type: 'Impossible', text: '"Airships won\'t be dangerous."' },
        { type: 'Possible', text: '"Workers might not travel to offices."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'You are 100% sure it will rain.', options: [{ id: 'a', text: 'It might rain', isCorrect: false }, { id: 'b', text: 'It will rain', isCorrect: true }] },
        { id: 2, question: 'Thinking about cinema, undecided.', options: [{ id: 'a', text: 'I will go', isCorrect: false }, { id: 'b', text: 'I might go', isCorrect: true }] },
        { id: 3, question: '"Won\'t" is short for:', options: [{ id: 'a', text: 'Will not', isCorrect: true }, { id: 'b', text: 'Would not', isCorrect: false }] },
        { id: 4, question: 'Do we use "to" after will/might?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No (Bare infinitive)', isCorrect: true }] },
        { id: 5, question: 'Uzbek: "Ular kelishi mumkin"', options: [{ id: 'a', text: 'They will come', isCorrect: false }, { id: 'b', text: 'They might come', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Experts think airships', sentenceAfter: 'people again. (carry)', hint: 'will/might', correctAnswer: 'will carry' },
        { id: 2, sentenceBefore: 'They are quiet, so they', sentenceAfter: 'popular. (be)', hint: 'will/might', correctAnswer: 'might be' },
        { id: 3, sentenceBefore: 'Airships', sentenceAfter: 'disappear this time. (won\'t)', hint: 'won\'t', correctAnswer: 'won\'t disappear' },
        { id: 4, sentenceBefore: 'They', sentenceAfter: 'very fast. (might not)', hint: 'travel', correctAnswer: 'might not travel' },
        { id: 5, sentenceBefore: 'Robots', sentenceAfter: 'passports. (will)', hint: 'check', correctAnswer: 'will check' },
      ],
      dragDrop: {
        bucketA: 'Certainty',
        bucketB: 'Possibility',
        items: [
          { id: '1', text: 'We might use', category: 'B' },
          { id: '2', text: 'John won\'t be', category: 'A' },
          { id: '3', text: 'Will serve', category: 'A' },
          { id: '4', text: 'Might be', category: 'B' },
          { id: '5', text: 'Cars won\'t need', category: 'A' },
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
    id: '7.2',
    title: 'Unit 7.2: Indefinite Pronouns',
    description: 'something, anyone, everybody, nowhere',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Prefixes (Quantifiers)', text: 'Some (undefined), Any (negative/question), No (negative), Every (all).', visualDescription: 'Gift box (some) vs Empty box (any).' },
        { title: 'Suffixes (Categories)', text: '-body/-one (people), -thing (objects), -where (places).', visualDescription: 'Icons: 👤, 📦, 📍.' },
      ],
      formulas: [
        { type: 'Construction', eng: 'Prefix + Suffix (e.g. Someone)', rus: 'Кто-то, Где-то...', uzb: 'Kimdir, Nimadir...' },
        { type: 'Singular Rule', eng: 'Indefinite pronouns + Singular Verb', rus: 'Глагол в ед. числе', uzb: 'Fe\'l birlikda keladi' }
      ],
      examples: [
        { type: 'Positive', text: '"Something is wrong."' },
        { type: 'Negative', text: '"I can\'t find keys anywhere."' },
        { type: 'Question', text: '"Has anybody called?"' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I searched for my phone, but I found it ______.', options: [{ id: 'a', text: 'everywhere', isCorrect: false }, { id: 'b', text: 'nowhere', isCorrect: true }, { id: 'c', text: 'anywhere', isCorrect: false }] },
        { id: 2, question: '______ likes free pizza! (Everyone is happy)', options: [{ id: 'a', text: 'Someone', isCorrect: false }, { id: 'b', text: 'Nobody', isCorrect: false }, { id: 'c', text: 'Everybody', isCorrect: true }] },
        { id: 3, question: 'Is there ______ in the fridge to eat?', options: [{ id: 'a', text: 'something', isCorrect: false }, { id: 'b', text: 'anything', isCorrect: true }, { id: 'c', text: 'nothing', isCorrect: false }] },
        { id: 4, question: '"Nobody ______ the answer." (Choose the verb)', options: [{ id: 'a', text: 'know', isCorrect: false }, { id: 'b', text: 'knows', isCorrect: true }] },
        { id: 5, question: 'In Uzbek, "Somebody" translates to:', options: [{ id: 'a', text: 'Hech kim', isCorrect: false }, { id: 'b', text: 'Kimdir', isCorrect: true }, { id: 'c', text: 'Hamma', isCorrect: false }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'There isn\'t', sentenceAfter: 'at the reception. (anyone)', hint: 'anyone', correctAnswer: 'anyone' },
        { id: 2, sentenceBefore: '', sentenceAfter: 'checked our tickets; we just walked in! (Nobody)', hint: 'Nobody', correctAnswer: 'Nobody' },
        { id: 3, sentenceBefore: 'We went', sentenceAfter: 'nice to eat last night. (somewhere)', hint: 'somewhere', correctAnswer: 'somewhere' },
        { id: 4, sentenceBefore: 'I don\'t want to stay', sentenceAfter: 'expensive. (anywhere)', hint: 'anywhere', correctAnswer: 'anywhere' },
        { id: 5, sentenceBefore: '', sentenceAfter: 'is so expensive here! (Everything)', hint: 'Everything', correctAnswer: 'Everything' },
      ],
      dragDrop: {
        bucketA: 'People',
        bucketB: 'Places',
        items: [
          { id: '1', text: 'Someone', category: 'A' },
          { id: '2', text: 'Everywhere', category: 'B' },
          { id: '3', text: 'No one', category: 'A' },
          { id: '4', text: 'Somewhere', category: 'B' },
          { id: '5', text: 'Everybody', category: 'A' },
          { id: '6', text: 'Nowhere', category: 'B' },
          { id: '7', text: 'Anyone', category: 'A' },
          { id: '8', text: 'Anywhere', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Opposite of everything', answer: 'NOTHING', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Is __ home?', answer: 'ANYONE', row: 0, col: 8 },
        { id: 3, direction: 'across', number: 3, clue: 'Another word for everyone', answer: 'EVERYBODY', row: 7, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Positive place', answer: 'SOMEWHERE', row: 0, col: 9 },
      ],
      snake: [
        { prompt: 'I didn\'t see ______ (Negative)', target: 'Anybody', decoys: ['Somebody', 'Nobody'] },
        { prompt: '______ called you (Positive)', target: 'Someone', decoys: ['Anyone', 'Anywhere'] },
      ]
    }
  },
  {
    id: '8.1',
    title: 'Unit 8.1: Ability (can, be able to)',
    description: 'Present, Past, and Future Ability',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Can (Present)', text: 'General ability or possibility now.', visualDescription: 'Superhero lifting a car 💪.' },
        { title: 'Be able to', text: 'Formal ability. Used where "can" is impossible.', visualDescription: 'Student graduating 🎓.' },
        { title: 'Future Ability', text: 'We use "will be able to".', visualDescription: 'Crystal ball 2030.' }
      ],
      formulas: [
        { type: 'Present', eng: 'S + can / is able to + V1', rus: 'может/умеет', uzb: '-a oladi / -ga qodir' },
        { type: 'Past', eng: 'S + could / was able to + V1', rus: 'мог', uzb: '-a oldi' },
        { type: 'Future', eng: 'S + will be able to + V1', rus: 'сможет', uzb: '-a oladi (kelasi)' }
      ],
      examples: [
        { type: 'Present', text: '"The brain can think creatively."' },
        { type: 'Negative', text: '"Computers aren\'t able to feel emotions."' },
        { type: 'Future', text: '"They will be able to fix it."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I _____ swim when I was 5.', options: [{ id: 'a', text: 'can', isCorrect: false }, { id: 'b', text: 'could', isCorrect: true }, { id: 'c', text: 'will be able to', isCorrect: false }] },
        { id: 2, question: 'In the future, robots _____ talk to us.', options: [{ id: 'a', text: 'will can', isCorrect: false }, { id: 'b', text: 'will be able to', isCorrect: true }, { id: 'c', text: 'are able to', isCorrect: false }] },
        { id: 3, question: 'She _____ come to the party tomorrow.', options: [{ id: 'a', text: 'won\'t be able to', isCorrect: true }, { id: 'b', text: 'cannot to', isCorrect: false }, { id: 'c', text: 'isn\'t able', isCorrect: false }] },
        { id: 4, question: '"I\'d like to _____ ski."', options: [{ id: 'a', text: 'can', isCorrect: false }, { id: 'b', text: 'be able to', isCorrect: true }] },
        { id: 5, question: 'Translate: "Men buni qila olmayman" (Present)', options: [{ id: 'a', text: 'I couldn\'t do it', isCorrect: false }, { id: 'b', text: 'I can\'t do it', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'It\'s too dark, but we', sentenceAfter: 'the map later. (read)', hint: 'will be able to read', correctAnswer: 'will be able to read' },
        { id: 2, sentenceBefore: 'I', sentenceAfter: 'Polish now. (speak)', hint: 'can\'t speak', correctAnswer: 'can\'t speak' },
        { id: 3, sentenceBefore: 'Stefan', sentenceAfter: 'of me when I\'m 90. (take care)', hint: 'will be able to take care', correctAnswer: 'will be able to take care' },
        { id: 4, sentenceBefore: 'We', sentenceAfter: 'you now, sorry. (help)', hint: 'can\'t help', correctAnswer: 'can\'t help' },
        { id: 5, sentenceBefore: 'Young people', sentenceAfter: 'quickly. (learn)', hint: 'are able to learn', correctAnswer: 'are able to learn' },
      ],
      dragDrop: {
        bucketA: 'Can / Could',
        bucketB: 'Be able to',
        items: [
          { id: '1', text: 'I can run fast', category: 'A' },
          { id: '2', text: 'I will be able to', category: 'B' },
          { id: '3', text: 'I could run fast', category: 'A' },
          { id: '4', text: 'I haven\'t been able to', category: 'B' },
          { id: '5', text: 'To be able to fly', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Past form of can', answer: 'COULD', row: 3, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Will you ___ able to?', answer: 'BE', row: 0, col: 5 },
        { id: 3, direction: 'across', number: 3, clue: 'Negative of can', answer: 'CANT', row: 5, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Skill or power', answer: 'ABILITY', row: 0, col: 3 },
      ],
      snake: [
        { prompt: 'Future Ability', target: 'Will be able to', decoys: ['Will can', 'Will able to'] },
        { prompt: 'Infinitive form', target: 'To be able to', decoys: ['To can', 'To could'] },
      ]
    }
  },
  {
    id: '8.2',
    title: 'Unit 8.2: Obligation & Necessity',
    description: 'must, have to, can',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Must', text: 'Strong rules. Speaker thinks it is necessary.', visualDescription: 'Finger pointing 🫵.' },
        { title: 'Have to', text: 'External obligation / Law.', visualDescription: 'Heavy backpack 🎒.' },
        { title: 'Mustn\'t vs Don\'t have to', text: 'Prohibition vs No Necessity (Optional).', visualDescription: 'Stop Sign 🛑 vs Shrug 🤷‍♂️.' }
      ],
      formulas: [
        { type: 'Obligation', eng: 'must / have to', rus: 'должен / приходится', uzb: 'shart / majbur' },
        { type: 'Prohibition', eng: 'mustn\'t', rus: 'нельзя', uzb: 'mumkin emas' },
        { type: 'No Necessity', eng: 'don\'t have to', rus: 'не обязательно', uzb: 'shart emas' }
      ],
      examples: [
        { type: 'Must', text: '"Teachers must be qualified."' },
        { type: 'Don\'t have to', text: '"He doesn\'t have to fill in a form."' },
        { type: 'Mustn\'t', text: '"You mustn\'t tell anyone."' }
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
    id: '9.1',
    title: 'Unit 9.1: First Conditional',
    description: 'If + present + will/won\'t/might',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Chain Reaction', text: 'Action A (Condition) -> causes Action B (Result).', visualDescription: 'Dominoes falling.' },
        { title: 'Certainty Levels', text: 'Will (Sure) vs Might (Possible).', visualDescription: 'Chart: 100% vs 50%.' }
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
    id: '9.2',
    title: 'Unit 9.2: Future Time Clauses',
    description: 'when, if, as soon as, before',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'When vs If', text: 'When (100% sure) vs If (50% sure).', visualDescription: 'Calendar check vs Dice roll.' },
        { title: 'As soon as / Before', text: 'Immediately after vs Preceding action.', visualDescription: 'Lightning bolt vs Clock.' }
      ],
      formulas: [
        { type: 'Rule', eng: '[Time Word] + Present Simple, [Main] + Will', rus: 'Когда/Перед тем как + наст, ... буд', uzb: 'Vaqt + hozirgi, ... kelasi' }
      ],
      examples: [
        { type: 'As soon as', text: '"As soon as sun comes up, we\'ll start."' },
        { type: 'Before', text: '"Before I cook, I\'ll go for a swim."' },
        { type: 'When', text: '"When animals see us, will they be scared?"' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I\'ll call you _____ I arrive. (Immediately)', options: [{ id: 'a', text: 'if', isCorrect: false }, { id: 'b', text: 'as soon as', isCorrect: true }] },
        { id: 2, question: 'We will wait _____ it stops raining.', options: [{ id: 'a', text: 'until / when', isCorrect: true }, { id: 'b', text: 'but', isCorrect: false }] },
        { id: 3, question: '_____ I see a rare animal, I\'ll take a photo. (Possibility)', options: [{ id: 'a', text: 'If', isCorrect: true }, { id: 'b', text: 'When', isCorrect: false }] },
        { id: 4, question: 'Which is correct?', options: [{ id: 'a', text: 'When I will get home', isCorrect: false }, { id: 'b', text: 'When I get home', isCorrect: true }] },
        { id: 5, question: 'Uzbek "Zahoti"', options: [{ id: 'a', text: 'Before', isCorrect: false }, { id: 'b', text: 'As soon as', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'When the weather', sentenceAfter: 'colder, autumn arrives. (get)', hint: 'gets', correctAnswer: 'gets' },
        { id: 2, sentenceBefore: 'We\'ll sleep when we', sentenceAfter: 'at the camp. (arrive)', hint: 'arrive', correctAnswer: 'arrive' },
        { id: 3, sentenceBefore: 'I\'ll walk back if I', sentenceAfter: 'lost. (get)', hint: 'get', correctAnswer: 'get' },
        { id: 4, sentenceBefore: 'A snake bites you, you', sentenceAfter: 'go to hospital. (have to)', hint: 'will have to', correctAnswer: 'will have to' },
        { id: 5, sentenceBefore: 'After you', sentenceAfter: 'the bus, you will see iguanas. (get off)', hint: 'get off', correctAnswer: 'get off' },
      ],
      dragDrop: {
        bucketA: 'Time Clause (Present)',
        bucketB: 'Main Clause (Will)',
        items: [
          { id: '1', text: 'When sun comes up', category: 'A' },
          { id: '2', text: 'We will start', category: 'B' },
          { id: '3', text: 'Before I cook', category: 'A' },
          { id: '4', text: 'I will go for swim', category: 'B' },
          { id: '5', text: 'When I get home', category: 'A' },
          { id: '6', text: 'I will call mom', category: 'B' },
          { id: '7', text: 'After I finish', category: 'A' },
          { id: '8', text: 'I will watch TV', category: 'B' },
          { id: '9', text: 'As soon as I arrive', category: 'A' },
          { id: '10', text: 'I will text you', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Immediately after', answer: 'ASSOONAS', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'At the time that', answer: 'WHEN', row: 0, col: 4 },
        { id: 3, direction: 'across', number: 3, clue: 'Opposite of after', answer: 'BEFORE', row: 4, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'Possibility word', answer: 'IF', row: 2, col: 7 },
      ],
      snake: [
        { prompt: '___ we go, let\'s look.', target: 'Before', decoys: ['After', 'Will'] },
        { prompt: 'Call you ___ I get there.', target: 'When', decoys: ['Will', 'During'] },
      ]
    }
  },
  {
    id: '10.1',
    title: 'Unit 10.1: Gerunds (-ing form)',
    description: 'When to use Verbs like Nouns',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Concept', text: 'The verb becomes the name of the activity.', visualDescription: 'Badge saying "Swimming".' },
        { title: '3 Rules', text: '1. Subject. 2. After Prepositions. 3. After Specific Verbs.', visualDescription: 'List 1-2-3.' }
      ],
      formulas: [
        { type: 'Construction', eng: 'Verb + ing', rus: 'Глагол-существительное', uzb: 'Harakat nomi (-ish)' }
      ],
      examples: [
        { type: 'Subject', text: '"Making an omelette is easy."' },
        { type: 'Preposition', text: '"Thank you for making dinner."' },
        { type: 'Verb', text: '"I avoid shopping in supermarkets."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I am interested in _____ (After prep)', options: [{ id: 'a', text: 'learn', isCorrect: false }, { id: 'b', text: 'learning', isCorrect: true }] },
        { id: 2, question: 'My hobby is _____', options: [{ id: 'a', text: 'bake', isCorrect: false }, { id: 'b', text: 'baking', isCorrect: true }] },
        { id: 3, question: 'Which verb is followed by -ing?', options: [{ id: 'a', text: 'Decide', isCorrect: false }, { id: 'b', text: 'Enjoy', isCorrect: true }, { id: 'c', text: 'Want', isCorrect: false }] },
        { id: 4, question: '"Eating sweets _____ bad for you."', options: [{ id: 'a', text: 'is', isCorrect: true }, { id: 'b', text: 'are', isCorrect: false }] },
        { id: 5, question: 'Uzbek "Reading"', options: [{ id: 'a', text: 'O\'qimoq', isCorrect: false }, { id: 'b', text: 'O\'qish', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Habit of', sentenceAfter: 'old food. (put)', hint: 'putting', correctAnswer: 'putting' },
        { id: 2, sentenceBefore: '', sentenceAfter: 'with my daughter was fun. (cook)', hint: 'Cooking', correctAnswer: 'Cooking' },
        { id: 3, sentenceBefore: 'Stay healthy by', sentenceAfter: 'vegetables. (eat)', hint: 'eating', correctAnswer: 'eating' },
        { id: 4, sentenceBefore: 'Thinking of', sentenceAfter: 'pizza? (have)', hint: 'having', correctAnswer: 'having' },
        { id: 5, sentenceBefore: 'We avoid', sentenceAfter: 'food away. (throw)', hint: 'throwing', correctAnswer: 'throwing' },
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
        { id: 2, direction: 'down', number: 2, clue: 'Thanks for ___', answer: 'HELPING', row: 0, col: 5 },
        { id: 3, direction: 'across', number: 3, clue: 'I enjoy ___', answer: 'WATCHING', row: 5, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: '-ing subject', answer: 'GERUND', row: 1, col: 8 },
      ],
      snake: [
        { prompt: 'Good at...', target: 'Dancing', decoys: ['Dance', 'To dance'] },
        { prompt: 'I love...', target: 'Swimming', decoys: ['Swim', 'Swam'] },
      ]
    }
  },
  {
    id: '10.2',
    title: 'Unit 10.2: The Passive Voice',
    description: 'Present Passive and Past Passive',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Focus Change', text: 'Focus on Object rather than Subject.', visualDescription: 'Arrow flipping positions.' },
        { title: 'Usage', text: 'Unknown agent or unimportant agent.', visualDescription: 'Mystery figure 🕵️.' }
      ],
      formulas: [
        { type: 'Formula', eng: 'Subject + BE + V3', rus: 'Быть + Причастие', uzb: 'Fe\'l + -l/-n' }
      ],
      examples: [
        { type: 'Present', text: '"The vegetables aren\'t cooked enough."' },
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
    id: '11.1',
    title: 'Unit 11.1: Second Conditional',
    description: 'Imaginary, unlikely situations (If + past + would)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Imaginary Reality', text: 'Not true now. A thought cloud 💭.', visualDescription: 'Person dreaming of money.' },
        { title: 'Time Reference', text: 'Uses Past Tense but refers to NOW or FUTURE.', visualDescription: 'Clock showing Now.' }
      ],
      formulas: [
        { type: 'Formula', eng: 'If + Past Simple, ... would + V1', rus: 'Если бы + прош, ... бы', uzb: 'Agar + o\'tgan, ... -ar edi' },
        { type: 'Be Rule', eng: 'If I/he/she/it WERE...', rus: 'Всегда were', uzb: 'Hamma shaxslarga were' }
      ],
      examples: [
        { type: 'Hypothetical', text: '"If I were rich, I wouldn\'t work."' },
        { type: 'Advice', text: '"If I were you, I would study."' },
        { type: 'Impossible', text: '"If we found a cure, lives would be saved."' }
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
    id: '11.2',
    title: 'Unit 11.2: Used to',
    description: 'Past habits or states that are finished now',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Old vs New Routine', text: 'Happened regularly in past, not now.', visualDescription: 'Split screen: Horse (Past) vs Car (Now).' }
      ],
      formulas: [
        { type: 'Positive', eng: 'S + used to + V1', rus: 'Раньше делал', uzb: 'Ilgari ...ar edi' },
        { type: 'Negative', eng: 'didn\'t use to', rus: 'Раньше не делал', uzb: '...mas edi' },
        { type: 'Question', eng: 'Did you use to...?', rus: 'Ты раньше...?', uzb: '...ar edingizmi?' }
      ],
      examples: [
        { type: 'Positive', text: '"People used to send telegrams."' },
        { type: 'Negative', text: '"We didn\'t use to have a TV."' },
        { type: 'Question', text: '"Did you use to watch videos?"' }
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
  {
    id: '12.1',
    title: 'Unit 12.1: Present Perfect (for/since)',
    description: 'Actions starting in the past and continuing to NOW',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Timeline', text: 'Measuring time from past to now.', visualDescription: 'Timeline graphic.' },
        { title: 'For vs Since', text: 'For (Duration) vs Since (Point).', visualDescription: 'Brackets ↔️ vs Pin 📍.' }
      ],
      formulas: [
        { type: 'Form', eng: 'S + have/has + V3 + for/since', rus: 'Я делаю это уже X лет', uzb: 'Men ... beri qilyapman' }
      ],
      examples: [
        { type: 'For', text: '"Ford has made cars for 110 years."' },
        { type: 'Since', text: '"I haven\'t worked since my accident."' },
        { type: 'Since (Date)', text: '"Since 1900."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: '_____ 2015.', options: [{ id: 'a', text: 'For', isCorrect: false }, { id: 'b', text: 'Since', isCorrect: true }] },
        { id: 2, question: '_____ three hours.', options: [{ id: 'a', text: 'For', isCorrect: true }, { id: 'b', text: 'Since', isCorrect: false }] },
        { id: 3, question: '_____ I was a child.', options: [{ id: 'a', text: 'For', isCorrect: false }, { id: 'b', text: 'Since', isCorrect: true }] },
        { id: 4, question: '_____ a long time.', options: [{ id: 'a', text: 'For', isCorrect: true }, { id: 'b', text: 'Since', isCorrect: false }] },
        { id: 5, question: '"Since 5 years" - Correct?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No (For)', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Lisa', sentenceAfter: 'a PA for two years. (be)', hint: 'has been', correctAnswer: 'has been' },
        { id: 2, sentenceBefore: 'We', sentenceAfter: 'in this hotel since Tuesday. (work)', hint: 'have worked', correctAnswer: 'have worked' },
        { id: 3, sentenceBefore: 'I', sentenceAfter: 'to be a nurse for years. (want)', hint: 'have wanted', correctAnswer: 'have wanted' },
        { id: 4, sentenceBefore: 'She', sentenceAfter: 'law since last year. (study)', hint: 'has studied', correctAnswer: 'has studied' },
        { id: 5, sentenceBefore: 'My grandad', sentenceAfter: 'a PC since he was 80. (have)', hint: 'has had', correctAnswer: 'has had' },
      ],
      dragDrop: {
        bucketA: 'SINCE (Point)',
        bucketB: 'FOR (Duration)',
        items: [
          { id: '1', text: 'Yesterday', category: 'A' },
          { id: '2', text: 'Two days', category: 'B' },
          { id: '3', text: 'Last week', category: 'A' },
          { id: '4', text: 'Ages', category: 'B' },
          { id: '5', text: '2005', category: 'A' },
          { id: '6', text: 'Six months', category: 'B' },
          { id: '7', text: 'March', category: 'A' },
          { id: '8', text: 'A week', category: 'B' },
          { id: '9', text: 'I left school', category: 'A' },
          { id: '10', text: '100 years', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Prep for duration', answer: 'FOR', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Prep for point', answer: 'SINCE', row: 0, col: 6 },
        { id: 3, direction: 'across', number: 3, clue: 'V3 of make', answer: 'MADE', row: 4, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'How ___ have you been?', answer: 'LONG', row: 1, col: 3 },
      ],
      snake: [
        { prompt: 'Start 2000, Now 2020', target: 'For 20 years', decoys: ['Since 20 years', 'In 20 years'] },
        { prompt: 'Start Monday', target: 'Since Monday', decoys: ['For Monday', 'To Monday'] },
      ]
    }
  },
  {
    id: '12.2',
    title: 'Unit 12.2: Infinitive with \'to\'',
    description: 'Purpose, Adjectives, Patterns (to + verb)',
    theory: {
      title: 'Meaning, Form, Pronunciation',
      concepts: [
        { title: 'Purpose', text: 'Why? Action + to + Infinitive.', visualDescription: 'Running to catch bus 🚌.' },
        { title: 'Adjectives', text: 'It is + Adj + to + Infinitive.', visualDescription: 'Happy face 😊.' },
        { title: 'Patterns', text: 'Verbs like want, need, hope need "to".', visualDescription: 'Puzzle pieces fitting.' }
      ],
      formulas: [
        { type: 'Purpose', eng: 'to + V1', rus: 'чтобы + инф', uzb: '-ish uchun' },
        { type: 'Adj', eng: 'It is + Adj + to + V1', rus: 'Это ... (делать)', uzb: '... (qilish) ...' }
      ],
      examples: [
        { type: 'Purpose', text: '"I\'m here to see the manager."' },
        { type: 'Adjective', text: '"It\'s interesting to hear."' },
        { type: 'Pattern', text: '"Don\'t forget to write."' }
      ]
    },
    exercises: {
      quiz: [
        { id: 1, question: 'I went to the shop _____ milk.', options: [{ id: 'a', text: 'for buy', isCorrect: false }, { id: 'b', text: 'to buy', isCorrect: true }] },
        { id: 2, question: 'It is important _____ polite.', options: [{ id: 'a', text: 'be', isCorrect: false }, { id: 'b', text: 'to be', isCorrect: true }] },
        { id: 3, question: 'I managed _____ the exam.', options: [{ id: 'a', text: 'to pass', isCorrect: true }, { id: 'b', text: 'passing', isCorrect: false }] },
        { id: 4, question: 'Remember _____ your homework.', options: [{ id: 'a', text: 'to do', isCorrect: true }, { id: 'b', text: 'do', isCorrect: false }] },
        { id: 5, question: 'Trans: "Men yordam berish uchun keldim."', options: [{ id: 'a', text: 'I came for help', isCorrect: false }, { id: 'b', text: 'I came to help', isCorrect: true }] },
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I\'m writing', sentenceAfter: 'for a job. (ask)', hint: 'to ask', correctAnswer: 'to ask' },
        { id: 2, sentenceBefore: 'It\'s useful', sentenceAfter: 'with emails quickly. (deal)', hint: 'to deal', correctAnswer: 'to deal' },
        { id: 3, sentenceBefore: 'You must try', sentenceAfter: 'when you speak. (smile)', hint: 'to smile', correctAnswer: 'to smile' },
        { id: 4, sentenceBefore: 'It\'s nice', sentenceAfter: 'at the weekend. (not/work)', hint: 'not to work', correctAnswer: 'not to work' },
        { id: 5, sentenceBefore: 'They want', sentenceAfter: 'a cure. (find)', hint: 'to find', correctAnswer: 'to find' },
      ],
      dragDrop: {
        bucketA: 'Starts Sentence',
        bucketB: 'Ends Sentence',
        items: [
          { id: '1', text: 'I study hard', category: 'A' },
          { id: '2', text: 'to pass exams', category: 'B' },
          { id: '3', text: 'It is difficult', category: 'A' },
          { id: '4', text: 'to learn Chinese', category: 'B' },
          { id: '5', text: 'I promise', category: 'A' },
          { id: '6', text: 'to help you', category: 'B' },
          { id: '7', text: 'He went to London', category: 'A' },
          { id: '8', text: 'to learn English', category: 'B' },
          { id: '9', text: 'It\'s easy', category: 'A' },
          { id: '10', text: 'to make a mistake', category: 'B' },
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Nice ___ meet you', answer: 'TO', row: 0, col: 0 },
        { id: 2, direction: 'down', number: 2, clue: 'Don\'t ___ to call', answer: 'FORGET', row: 0, col: 4 },
        { id: 3, direction: 'across', number: 3, clue: 'I ___ to see you', answer: 'HOPE', row: 3, col: 0 },
        { id: 4, direction: 'down', number: 4, clue: 'It is ___ to lose', answer: 'EASY', row: 1, col: 7 },
      ],
      snake: [
        { prompt: 'I came here...', target: 'To see you', decoys: ['For see you', 'Seeing you'] },
        { prompt: 'It is good...', target: 'To be home', decoys: ['For be home', 'Be home'] },
      ]
    }
  }
];