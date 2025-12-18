
import { Unit } from './types';

export const UNITS: Unit[] = [
  // ==========================================
  // LEVEL B1: PRE-INTERMEDIATE
  // ==========================================

  // --- UNIT 1: Present Simple vs Continuous ---
  {
    id: 'Nav-B1-01',
    level: 'B1',
    title: 'Unit 1: Present Simple vs Continuous',
    description: 'Facts & Habits (Simple) vs Actions Now & Temporary (Continuous).',
    timelineMode: 'present_vs_continuous',
    leadIn: {
      title: 'Always vs Now',
      imageOrText: 'I *live* in London (Permanent). I *am staying* at a hotel (Temporary).',
      question: 'Which action will finish soon?'
    },
    meaning: {
      concepts: [
        { title: 'Present Simple', visualDescription: 'A solid stone block.', textEng: 'Facts, habits, permanent states.', textRus: 'Факты, привычки, постоянные действия.', textUzb: 'Faktlar, odatlar, doimiy holatlar.' },
        { title: 'Present Continuous', visualDescription: 'A spinning loading icon.', textEng: 'Actions happening now or temporary.', textRus: 'Действия сейчас или временные.', textUzb: 'Hozir sodir bo\'layotgan yoki vaqtinchalik ishlar.' }
      ],
      formulas: [
        { label: 'Simple', formula: 'Sub + V1 (+s/es)' },
        { label: 'Continuous', formula: 'Sub + am/is/are + V-ing' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'I _____ tennis every Sunday.', options: [{ id: 'a', text: 'play', isCorrect: true }, { id: 'b', text: 'am playing', isCorrect: false }] },
      { id: 2, question: 'Look! It _____ .', options: [{ id: 'a', text: 'rains', isCorrect: false }, { id: 'b', text: 'is raining', isCorrect: true }] },
      { id: 3, question: 'State verbs (like "know") usually take Continuous.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False', isCorrect: true }] }
    ],
    examples: [
      { type: 'Simple', text: '"Water boils at 100 degrees."' },
      { type: 'Continuous', text: '"I am working on a new project this month."' },
      { type: 'State Verb', text: '"I understand (NOT am understanding)."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'She usually _____ coffee.', options: [{ id: 'a', text: 'drinks', isCorrect: true }, { id: 'b', text: 'is drinking', isCorrect: false }] },
        { id: 2, question: 'Where is John? He _____ a shower.', options: [{ id: 'a', text: 'has', isCorrect: false }, { id: 'b', text: 'is having', isCorrect: true }] },
        { id: 3, question: 'I _____ what you mean.', options: [{ id: 'a', text: 'see', isCorrect: true }, { id: 'b', text: 'am seeing', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'Listen! The baby _____ .', options: [{ id: 'a', text: 'cries', isCorrect: false }, { id: 'b', text: 'is crying', isCorrect: true }] },
        { id: 2, question: 'We _____ to France every summer.', options: [{ id: 'a', text: 'go', isCorrect: true }, { id: 'b', text: 'are going', isCorrect: false }] },
        { id: 3, question: 'He _____ being rude today.', options: [{ id: 'a', text: 'is', isCorrect: false }, { id: 'b', text: 'is being', isCorrect: true }] }
      ],
      kahoot: [
        { id: 1, question: 'NOW -> ?', options: [{ id: 'a', text: 'Simple', isCorrect: false }, { id: 'b', text: 'Continuous', isCorrect: true }] },
        { id: 2, question: 'ALWAYS -> ?', options: [{ id: 'a', text: 'Simple', isCorrect: true }, { id: 'b', text: 'Continuous', isCorrect: false }] },
        { id: 3, question: 'LIKE/LOVE -> ?', options: [{ id: 'a', text: 'Simple', isCorrect: true }, { id: 'b', text: 'Continuous', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I usually', sentenceAfter: 'to work. (drive)', hint: 'drive', correctAnswer: 'drive' },
        { id: 2, sentenceBefore: 'But today I', sentenceAfter: 'the bus. (take)', hint: 'am taking', correctAnswer: 'am taking' },
        { id: 3, sentenceBefore: 'Be quiet! I', sentenceAfter: '. (study)', hint: 'am studying', correctAnswer: 'am studying' },
        { id: 4, sentenceBefore: 'He', sentenceAfter: 'smoke. (not)', hint: 'does not', correctAnswer: 'does not' },
        { id: 5, sentenceBefore: 'Why', sentenceAfter: 'you laughing? (be)', hint: 'are', correctAnswer: 'are' }
      ],
      dragDrop: {
        bucketA: 'Present Simple',
        bucketB: 'Pres Continuous',
        items: [
          { id: '1', text: 'Every day', category: 'A' },
          { id: '2', text: 'Right now', category: 'B' },
          { id: '3', text: 'Usually', category: 'A' },
          { id: '4', text: 'At the moment', category: 'B' },
          { id: '5', text: 'Look!', category: 'B' },
          { id: '6', text: 'Often', category: 'A' }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: 'Verb + ing form', answer: 'GERUND', row: 2, col: 1 },
        { id: 2, direction: 'down', number: 1, clue: 'Opposite of stop', answer: 'GO', row: 2, col: 1 }
      ]
    },
    reading: {
      title: 'A Digital Nomad',
      passage: "My name is Sarah. I usually live in New York, but this month I am living in Bali. I work as a graphic designer. Usually, I work from an office, but right now I am working from a cafe by the beach. The sun is shining and people are surfing. I love my life here, but I miss my cat.",
      questions: [
        { id: 1, question: 'Where does Sarah usually live?', options: [{ id: 'a', text: 'Bali', isCorrect: false }, { id: 'b', text: 'New York', isCorrect: true }] },
        { id: 2, question: 'What is she doing this month?', options: [{ id: 'a', text: 'Living in Bali', isCorrect: true }, { id: 'b', text: 'Living in NY', isCorrect: false }] },
        { id: 3, question: 'Is the sun shining?', options: [{ id: 'a', text: 'Yes', isCorrect: true }, { id: 'b', text: 'No', isCorrect: false }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Daily Routine', question: 'What do you usually do on weekends? What are you doing this weekend?' },
      { id: 2, topic: 'Current Trends', question: 'What is happening in the news right now?' },
      { id: 3, topic: 'Changes', question: 'Are you learning anything new these days?' }
    ]
  },

  // --- UNIT 2: Past Simple vs Continuous ---
  {
    id: 'Nav-B1-02',
    level: 'B1',
    title: 'Unit 2: Past Simple vs Continuous',
    description: 'Completed actions vs Actions in progress in the past.',
    timelineMode: 'past_interrupted',
    leadIn: {
      title: 'The Interruption',
      imageOrText: 'I was watching TV when the phone rang.',
      question: 'Which action was long? Which action stopped it?'
    },
    meaning: {
      concepts: [
        { title: 'Past Continuous', visualDescription: 'A wavy line representing a long background action.', textEng: 'Action in progress at a specific past time.', textRus: 'Действие в процессе в прошлом.', textUzb: 'O\'tgan zamonda davom etayotgan ish-harakat.' },
        { title: 'Past Simple', visualDescription: 'A sharp X intersecting the line.', textEng: 'Short completed action that interrupts.', textRus: 'Короткое завершенное действие.', textUzb: 'Qisqa tugallangan harakat.' }
      ],
      formulas: [
        { label: 'Continuous', formula: 'was/were + V-ing' },
        { label: 'Simple', formula: 'V2 (ed/irregular)' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'We use Past Continuous for short actions.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False', isCorrect: true }] },
      { id: 2, question: '"While" is usually followed by...', options: [{ id: 'a', text: 'Past Continuous', isCorrect: true }, { id: 'b', text: 'Past Simple', isCorrect: false }] },
      { id: 3, question: '"When" is usually followed by...', options: [{ id: 'a', text: 'Past Continuous', isCorrect: false }, { id: 'b', text: 'Past Simple', isCorrect: true }] }
    ],
    examples: [
      { type: 'Interruption', text: '"I was sleeping when the alarm rang."' },
      { type: 'Scene Setting', text: '"The birds were singing and the sun was shining."' },
      { type: 'Parallel', text: '"I was cooking while he was reading."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'I _____ my leg while I was skiing.', options: [{ id: 'a', text: 'broke', isCorrect: true }, { id: 'b', text: 'was breaking', isCorrect: false }] },
        { id: 2, question: 'They _____ for the bus when it started to rain.', options: [{ id: 'a', text: 'waited', isCorrect: false }, { id: 'b', text: 'were waiting', isCorrect: true }] },
        { id: 3, question: 'What _____ at 8pm last night?', options: [{ id: 'a', text: 'did you do', isCorrect: false }, { id: 'b', text: 'were you doing', isCorrect: true }] }
      ],
      quizzes: [
        { id: 1, question: 'He met his wife while he _____ in London.', options: [{ id: 'a', text: 'lived', isCorrect: false }, { id: 'b', text: 'was living', isCorrect: true }] },
        { id: 2, question: 'When I walked in, they _____ about me.', options: [{ id: 'a', text: 'talked', isCorrect: false }, { id: 'b', text: 'were talking', isCorrect: true }] },
        { id: 3, question: 'I was driving fast when the police _____ me.', options: [{ id: 'a', text: 'stopped', isCorrect: true }, { id: 'b', text: 'was stopping', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'WHILE -> ?', options: [{ id: 'a', text: 'Continuous', isCorrect: true }, { id: 'b', text: 'Simple', isCorrect: false }] },
        { id: 2, question: 'WHEN -> ?', options: [{ id: 'a', text: 'Simple', isCorrect: true }, { id: 'b', text: 'Continuous', isCorrect: false }] },
        { id: 3, question: 'LONG ACTION -> ?', options: [{ id: 'a', text: 'Continuous', isCorrect: true }, { id: 'b', text: 'Simple', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I', sentenceAfter: 'dinner when you called. (cook)', hint: 'was cooking', correctAnswer: 'was cooking' },
        { id: 2, sentenceBefore: 'She', sentenceAfter: 'her finger while cutting onions. (cut)', hint: 'cut', correctAnswer: 'cut' },
        { id: 3, sentenceBefore: 'We', sentenceAfter: 'TV all evening. (watch)', hint: 'were watching', correctAnswer: 'were watching' },
        { id: 4, sentenceBefore: 'It', sentenceAfter: 'to snow. (start)', hint: 'started', correctAnswer: 'started' },
        { id: 5, sentenceBefore: 'What', sentenceAfter: 'you thinking about? (were)', hint: 'were', correctAnswer: 'were' }
      ]
    },
    reading: {
      title: 'The Accident',
      passage: "It was a dark and stormy night. I was driving home from work. The rain was falling heavily and I couldn't see very well. Suddenly, a dog ran across the road. I tried to stop, but the car skidded. Luckily, I didn't hit the dog, but I hit a tree. While I was waiting for the police, the dog came back and licked my hand.",
      questions: [
        { id: 1, question: 'What was the weather like?', options: [{ id: 'a', text: 'Sunny', isCorrect: false }, { id: 'b', text: 'Raining', isCorrect: true }] },
        { id: 2, question: 'What happened while he was driving?', options: [{ id: 'a', text: 'A dog ran out', isCorrect: true }, { id: 'b', text: 'He fell asleep', isCorrect: false }] },
        { id: 3, question: 'What was he doing when the dog licked him?', options: [{ id: 'a', text: 'Driving', isCorrect: false }, { id: 'b', text: 'Waiting', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'A Strange Event', question: 'Describe something strange that happened to you. Set the scene (what were you doing?).' },
      { id: 2, topic: 'Last Night', question: 'What were you doing at 8 PM yesterday? What about 10 PM?' },
      { id: 3, topic: 'Interruption', question: 'Have you ever been interrupted while doing something important? What happened?' }
    ]
  },

  // --- UNIT 3: Future Forms (Plans) ---
  {
    id: 'Nav-B1-03',
    level: 'B1',
    title: 'Unit 3: Future Plans',
    description: 'Going to (Intentions) vs Present Continuous (Arrangements).',
    timelineMode: 'future_plans',
    leadIn: {
      title: 'Diary vs Dream',
      imageOrText: 'Diary: "Meeting Boss at 9am" (Arrangement). Thought: "I am going to buy a Ferrari one day" (Intention).',
      question: 'Which one is 100% sure?'
    },
    meaning: {
      concepts: [
        { title: 'Present Continuous', visualDescription: 'A diary with a fixed appointment.', textEng: 'Fixed arrangements with time/place.', textRus: 'Фиксированные договоренности.', textUzb: 'Aniq belgilangan rejalar.' },
        { title: 'Going to', visualDescription: 'A thought bubble.', textEng: 'Intentions or plans, but maybe not booked yet.', textRus: 'Намерения, планы.', textUzb: 'Niyatlar.' },
        { title: 'Prediction', visualDescription: 'Looking at dark clouds.', textEng: 'Going to is also for predictions with evidence.', textRus: 'Предсказания на основе фактов.', textUzb: 'Dalilga asoslangan bashorat.' }
      ],
      formulas: [
        { label: 'Arrangement', formula: 'be + V-ing' },
        { label: 'Intention', formula: 'be going to + V1' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'I have bought tickets. I _____ to Paris tomorrow.', options: [{ id: 'a', text: 'am going to fly', isCorrect: false }, { id: 'b', text: 'am flying', isCorrect: true }] },
      { id: 2, question: 'Look at those clouds! It _____ rain.', options: [{ id: 'a', text: 'is going to', isCorrect: true }, { id: 'b', text: 'is raining', isCorrect: false }] },
      { id: 3, question: 'For instant decisions (Wait, I will help!), we use...', options: [{ id: 'a', text: 'Will', isCorrect: true }, { id: 'b', text: 'Going to', isCorrect: false }] }
    ],
    examples: [
      { type: 'Arrangement', text: '"I am seeing the doctor at 3 PM."' },
      { type: 'Intention', text: '"I am going to look for a new job next year."' },
      { type: 'Evidence', text: '"She looks pale. She is going to faint."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'What _____ this weekend?', options: [{ id: 'a', text: 'do you do', isCorrect: false }, { id: 'b', text: 'are you doing', isCorrect: true }] },
        { id: 2, question: 'I decided yesterday. I _____ a new car.', options: [{ id: 'a', text: 'am going to buy', isCorrect: true }, { id: 'b', text: 'buy', isCorrect: false }] },
        { id: 3, question: 'She _____ married in June.', options: [{ id: 'a', text: 'is getting', isCorrect: true }, { id: 'b', text: 'gets', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'I can\'t come. I _____ tennis with Bob.', options: [{ id: 'a', text: 'am playing', isCorrect: true }, { id: 'b', text: 'play', isCorrect: false }] },
        { id: 2, question: 'Watch out! You _____ crash!', options: [{ id: 'a', text: 'are going to', isCorrect: true }, { id: 'b', text: 'will', isCorrect: false }] },
        { id: 3, question: 'We _____ a party next week. Can you come?', options: [{ id: 'a', text: 'are having', isCorrect: true }, { id: 'b', text: 'have', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'TICKETS BOUGHT -> ?', options: [{ id: 'a', text: 'Pres Cont', isCorrect: true }, { id: 'b', text: 'Going to', isCorrect: false }] },
        { id: 2, question: 'JUST AN IDEA -> ?', options: [{ id: 'a', text: 'Pres Cont', isCorrect: false }, { id: 'b', text: 'Going to', isCorrect: true }] },
        { id: 3, question: 'PREDICTION (CLOUDS) -> ?', options: [{ id: 'a', text: 'Going to', isCorrect: true }, { id: 'b', text: 'Will', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I', sentenceAfter: 'my grandmother on Sunday. (visit)', hint: 'am visiting', correctAnswer: 'am visiting' },
        { id: 2, sentenceBefore: 'He', sentenceAfter: 'be a doctor when he grows up. (going to)', hint: 'is going to', correctAnswer: 'is going to' },
        { id: 3, sentenceBefore: 'What', sentenceAfter: 'do tonight? (you/go)', hint: 'are you going to', correctAnswer: 'are you going to' },
        { id: 4, sentenceBefore: 'We', sentenceAfter: 'at the cinema at 8.00. (meet)', hint: 'are meeting', correctAnswer: 'are meeting' },
        { id: 5, sentenceBefore: 'The tree is shaking. It', sentenceAfter: 'fall. (going)', hint: 'is going to', correctAnswer: 'is going to' }
      ]
    },
    reading: {
      title: 'Weekend Plans',
      passage: "Hi Mom, just writing about my weekend. On Friday night, I am meeting Sam for dinner. We have booked a table at Mario's. On Saturday morning, I am going to clean the house. I haven't decided exactly when, but I plan to do it. Then in the afternoon, I am playing tennis with Jane at 2 PM. Sunday is free, so I am going to relax.",
      questions: [
        { id: 1, question: 'Is the dinner with Sam fixed?', options: [{ id: 'a', text: 'Yes (Booked)', isCorrect: true }, { id: 'b', text: 'No (Maybe)', isCorrect: false }] },
        { id: 2, question: 'What is the plan for Saturday morning?', options: [{ id: 'a', text: 'Tennis', isCorrect: false }, { id: 'b', text: 'Cleaning', isCorrect: true }] },
        { id: 3, question: 'Does the narrator have specific plans for Sunday?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No, just intention', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Next Weekend', question: 'What are you doing next weekend? Do you have any fixed arrangements?' },
      { id: 2, topic: 'Future Ambitions', question: 'What are you going to do in 5 years? What are your intentions?' },
      { id: 3, topic: 'Holidays', question: 'Are you going anywhere this summer? Tell me your plans.' }
    ]
  },

  // --- UNIT 6: Comparisons (Existing) ---
  {
    id: 'Nav-B1-06',
    level: 'B1',
    title: 'Unit 6: Comparisons',
    description: 'Comparative (-er/more) & Superlative (-est/most) Adjectives; (not) as...as.',
    timelineMode: 'comparison_scale',
    leadIn: {
      title: 'Who is Taller?',
      imageOrText: 'Imagine two stick figures. One is named Bob (180cm), one is named Tim (160cm).',
      question: 'How do we describe the difference between Bob and Tim?'
    },
    meaning: {
      concepts: [
        { title: 'Comparative', visualDescription: 'Two stick figures: One tall, one short.', textEng: 'Comparing 2 distinct things/people.', textRus: 'Сравнение двух вещей.', textUzb: '2 narsani taqqoslash.' },
        { title: 'Superlative', visualDescription: 'A podium with 1st, 2nd, 3rd place.', textEng: 'Comparing 1 thing against a whole group.', textRus: 'Сравнение с группой.', textUzb: 'Guruh bilan taqqoslash.' },
        { title: 'Equality', visualDescription: 'A balance scale.', textEng: '(Not) as...as shows equality or inequality.', textRus: 'Равенство.', textUzb: 'Tenglik.' }
      ],
      formulas: [
        { label: 'Short', formula: 'adj-er / the adj-est' },
        { label: 'Long', formula: 'more adj / the most adj' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'Comparative compares ______ things.', options: [{ id: 'a', text: 'two', isCorrect: true }, { id: 'b', text: 'three+', isCorrect: false }] },
      { id: 2, question: 'Change Y to...', options: [{ id: 'a', text: 'i + er', isCorrect: true }, { id: 'b', text: 'y + er', isCorrect: false }] },
      { id: 3, question: 'Opposite of "more" is...', options: [{ id: 'a', text: 'less', isCorrect: true }, { id: 'b', text: 'least', isCorrect: false }] }
    ],
    examples: [
      { type: 'Comparative', text: '"Pilar is smarter than I am."' },
      { type: 'Superlative', text: '"Mrs Fiore is the most patient person."' },
      { type: 'Equality', text: '"Evan isn\'t as confident as me."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'This car is _____ than that one.', options: [{ id: 'a', text: 'faster', isCorrect: true }, { id: 'b', text: 'more fast', isCorrect: false }] },
        { id: 2, question: 'He is the _____ player on the team.', options: [{ id: 'a', text: 'goodest', isCorrect: false }, { id: 'b', text: 'best', isCorrect: true }] },
        { id: 3, question: 'It is not as hot _____ yesterday.', options: [{ id: 'a', text: 'than', isCorrect: false }, { id: 'b', text: 'as', isCorrect: true }] }
      ],
      quizzes: [
        { id: 1, question: 'Which is correct?', options: [{ id: 'a', text: 'More happier', isCorrect: false }, { id: 'b', text: 'Happier', isCorrect: true }] },
        { id: 2, question: 'She is _____ interesting than him.', options: [{ id: 'a', text: 'more', isCorrect: true }, { id: 'b', text: 'most', isCorrect: false }] },
        { id: 3, question: 'The _____ day of the year.', options: [{ id: 'a', text: 'longest', isCorrect: true }, { id: 'b', text: 'longer', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'BAD -> ?', options: [{ id: 'a', text: 'Worse', isCorrect: true }, { id: 'b', text: 'Badder', isCorrect: false }] },
        { id: 2, question: 'FAR -> ?', options: [{ id: 'a', text: 'Further', isCorrect: true }, { id: 'b', text: 'Farer', isCorrect: false }] },
        { id: 3, question: 'EXPENSIVE -> ?', options: [{ id: 'a', text: 'More expensive', isCorrect: true }, { id: 'b', text: 'Expensiver', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'Type A is', sentenceAfter: 'than Type B. (stressed)', hint: 'more stressed', correctAnswer: 'more stressed' },
        { id: 2, sentenceBefore: 'He is', sentenceAfter: 'than me. (old)', hint: 'older', correctAnswer: 'older' },
        { id: 3, sentenceBefore: 'This is the', sentenceAfter: 'film ever. (bad)', hint: 'worst', correctAnswer: 'worst' },
        { id: 4, sentenceBefore: 'I am as', sentenceAfter: 'as you. (tall)', hint: 'tall', correctAnswer: 'tall' },
        { id: 5, sentenceBefore: 'She is', sentenceAfter: 'than her sister. (pretty)', hint: 'prettier', correctAnswer: 'prettier' }
      ],
      snake: [
        { prompt: 'Base: BEAUTIFUL', target: 'More beautiful', decoys: ['Beautifuler', 'Beautifulest'] },
        { prompt: 'Base: BAD', target: 'Worse', decoys: ['Badder', 'Baddest'] },
      ]
    },
    reading: {
      title: 'City vs Country',
      passage: "Living in the city is more expensive than living in the country. The houses are smaller, but the nightlife is better. The country is quieter and the air is cleaner. However, for young people, the city is usually the most exciting place to be. It isn't as relaxing as the country, but it is more fun.",
      questions: [
        { id: 1, question: 'Which is more expensive?', options: [{ id: 'a', text: 'City', isCorrect: true }, { id: 'b', text: 'Country', isCorrect: false }] },
        { id: 2, question: 'Which has cleaner air?', options: [{ id: 'a', text: 'City', isCorrect: false }, { id: 'b', text: 'Country', isCorrect: true }] },
        { id: 3, question: 'The city is not as _____ as the country.', options: [{ id: 'a', text: 'relaxing', isCorrect: true }, { id: 'b', text: 'exciting', isCorrect: false }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Compare 2 Cities', question: 'Compare your hometown with the capital city. Which is bigger? Which is nicer?' },
      { id: 2, topic: 'Family', question: 'Who is the oldest person in your family? Who is the funniest?' },
      { id: 3, topic: 'Transport', question: 'Is flying better than taking the train? Compare them.' }
    ]
  },

  // --- UNIT 7: Past Simple vs Present Perfect (Existing) ---
  {
    id: 'Nav-B1-07',
    level: 'B1',
    title: 'Unit 7: Past vs Pres Perfect',
    description: 'Finished time (Past Simple) vs Unfinished time/Experience (Present Perfect).',
    timelineMode: 'perfect_vs_simple',
    leadIn: {
      title: 'Closed vs Open Door',
      imageOrText: '2010 (Closed). Life until now (Open).',
      question: 'Which tense connects the past to the present?'
    },
    meaning: {
      concepts: [
        { title: 'Past Simple', visualDescription: 'Calendar with 2011 crossed out.', textEng: 'Finished time.', textRus: 'Законченное время.', textUzb: 'Tugallangan vaqt.' },
        { title: 'Present Perfect', visualDescription: 'Arrow from past to NOW.', textEng: 'Experience / Unfinished.', textRus: 'Опыт / Незаконченное.', textUzb: 'Tajriba / Tugallanmagan.' }
      ],
      formulas: [
        { label: 'Past Simple', formula: 'V2' },
        { label: 'Present Perfect', formula: 'have/has + V3' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'We use Past Simple for exact dates.', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] },
      { id: 2, question: '"I have been to Paris" = I am there now.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False', isCorrect: true }] },
      { id: 3, question: 'Use "yet" in...', options: [{ id: 'a', text: 'Questions/Negatives', isCorrect: true }, { id: 'b', text: 'Positives', isCorrect: false }] }
    ],
    examples: [
      { type: 'Experience', text: '"I have travelled to Asia."' },
      { type: 'Specific Past', text: '"I went there in 2010."' },
      { type: 'Result', text: '"I have lost my keys (I don\'t have them now)."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'I _____ him yesterday.', options: [{ id: 'a', text: 'saw', isCorrect: true }, { id: 'b', text: 'have seen', isCorrect: false }] },
        { id: 2, question: 'She _____ never _____ sushi.', options: [{ id: 'a', text: 'has/eaten', isCorrect: true }, { id: 'b', text: 'did/eat', isCorrect: false }] },
        { id: 3, question: 'When _____ you _____ ?', options: [{ id: 'a', text: 'did/arrive', isCorrect: true }, { id: 'b', text: 'have/arrived', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'He _____ the book yet.', options: [{ id: 'a', text: 'didn\'t read', isCorrect: false }, { id: 'b', text: 'hasn\'t read', isCorrect: true }] },
        { id: 2, question: 'I _____ my leg last year.', options: [{ id: 'a', text: 'broke', isCorrect: true }, { id: 'b', text: 'have broken', isCorrect: false }] },
        { id: 3, question: '_____ you ever _____ a ghost?', options: [{ id: 'a', text: 'Have/seen', isCorrect: true }, { id: 'b', text: 'Did/see', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'YESTERDAY -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Pres Perfect', isCorrect: false }] },
        { id: 2, question: 'EVER -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: false }, { id: 'b', text: 'Pres Perfect', isCorrect: true }] },
        { id: 3, question: 'AGO -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Pres Perfect', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I', sentenceAfter: 'just finished. (have)', hint: 'have', correctAnswer: 'have' },
        { id: 2, sentenceBefore: 'She', sentenceAfter: 'go to the party last night. (didn\'t)', hint: 'didn\'t', correctAnswer: 'didn\'t' },
        { id: 3, sentenceBefore: 'Have you', sentenceAfter: 'been to USA? (ever)', hint: 'ever', correctAnswer: 'ever' },
        { id: 4, sentenceBefore: 'We', sentenceAfter: 'married in 2005. (got)', hint: 'got', correctAnswer: 'got' },
        { id: 5, sentenceBefore: 'I haven\'t done it', sentenceAfter: '. (yet)', hint: 'yet', correctAnswer: 'yet' }
      ],
      snake: [
        { prompt: 'V3 of SPEAK', target: 'Spoken', decoys: ['Spoke', 'Speaked'] },
        { prompt: 'V2 of GO', target: 'Went', decoys: ['Gone', 'Goed'] },
      ]
    },
    reading: {
      title: 'Travel Log',
      passage: "I have visited five countries in my life. I went to France in 2018. It was beautiful. I haven't been to Italy yet, but I want to go. My brother has travelled more than me. He went to Japan last month.",
      questions: [
        { id: 1, question: 'When did he go to France?', options: [{ id: 'a', text: '2018', isCorrect: true }, { id: 'b', text: 'Recently', isCorrect: false }] },
        { id: 2, question: 'Has he been to Italy?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 3, question: 'Who has travelled more?', options: [{ id: 'a', text: 'Narrator', isCorrect: false }, { id: 'b', text: 'Brother', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Life Experiences', question: 'Have you ever eaten something very strange? What was it?' },
      { id: 2, topic: 'Last Holiday', question: 'Where did you go on your last holiday? What did you do?' },
      { id: 3, topic: 'Achievements', question: 'What have you achieved this year?' }
    ]
  },

  // --- UNIT 9: First Conditional ---
  {
    id: 'Nav-B1-09',
    level: 'B1',
    title: 'Unit 9: First Conditional',
    description: 'Possible future situations and their results.',
    timelineMode: 'chain_reaction',
    leadIn: {
      title: 'The Domino Effect',
      imageOrText: 'If you drop the glass, it will break.',
      question: 'Is this a real possibility?'
    },
    meaning: {
      concepts: [
        { title: 'Condition (If)', visualDescription: 'The first domino.', textEng: 'Present Tense.', textRus: 'Настоящее время.', textUzb: 'Hozirgi zamon.' },
        { title: 'Result (Will)', visualDescription: 'The second domino falling.', textEng: 'Future Tense (will/won\'t).', textRus: 'Будущее время.', textUzb: 'Kelasi zamon.' }
      ],
      formulas: [
        { label: 'Formula', formula: 'If + Present Simple, ... will + V1' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'After "If", we use...', options: [{ id: 'a', text: 'Will', isCorrect: false }, { id: 'b', text: 'Present Simple', isCorrect: true }] },
      { id: 2, question: 'First conditional describes...', options: [{ id: 'a', text: 'Real possibilities', isCorrect: true }, { id: 'b', text: 'Dreams', isCorrect: false }] },
      { id: 3, question: 'Can "If" go in the middle?', options: [{ id: 'a', text: 'Yes', isCorrect: true }, { id: 'b', text: 'No', isCorrect: false }] }
    ],
    examples: [
      { type: 'Warning', text: '"If you touch that, you will burn yourself."' },
      { type: 'Promise', text: '"If I pass the exam, I will buy a new phone."' },
      { type: 'Negotiation', text: '"I will cook if you wash the dishes."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'If it _____, we will stay home.', options: [{ id: 'a', text: 'rains', isCorrect: true }, { id: 'b', text: 'will rain', isCorrect: false }] },
        { id: 2, question: 'I will call you if I _____ time.', options: [{ id: 'a', text: 'have', isCorrect: true }, { id: 'b', text: 'will have', isCorrect: false }] },
        { id: 3, question: 'What _____ you do if you miss the bus?', options: [{ id: 'a', text: 'will', isCorrect: true }, { id: 'b', text: 'do', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'If she _____ hard, she will pass.', options: [{ id: 'a', text: 'studies', isCorrect: true }, { id: 'b', text: 'study', isCorrect: false }] },
        { id: 2, question: 'We won\'t go if you _____ want to.', options: [{ id: 'a', text: 'don\'t', isCorrect: true }, { id: 'b', text: 'won\'t', isCorrect: false }] },
        { id: 3, question: 'If I see him, I _____ him.', options: [{ id: 'a', text: 'tell', isCorrect: false }, { id: 'b', text: 'will tell', isCorrect: true }] }
      ],
      kahoot: [
        { id: 1, question: 'IF clause tense? -> ?', options: [{ id: 'a', text: 'Present', isCorrect: true }, { id: 'b', text: 'Future', isCorrect: false }] },
        { id: 2, question: 'Result clause tense? -> ?', options: [{ id: 'a', text: 'Present', isCorrect: false }, { id: 'b', text: 'Future (Will)', isCorrect: true }] },
        { id: 3, question: 'UNLESS means? -> ?', options: [{ id: 'a', text: 'If not', isCorrect: true }, { id: 'b', text: 'Because', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'If you', sentenceAfter: 'fast, you will catch the bus. (run)', hint: 'run', correctAnswer: 'run' },
        { id: 2, sentenceBefore: 'We', sentenceAfter: 'be late if we don\'t hurry. (will)', hint: 'will', correctAnswer: 'will' },
        { id: 3, sentenceBefore: 'If it', sentenceAfter: 'tomorrow, we won\'t go. (snow)', hint: 'snows', correctAnswer: 'snows' },
        { id: 4, sentenceBefore: 'I will be happy if I', sentenceAfter: 'the job. (get)', hint: 'get', correctAnswer: 'get' },
        { id: 5, sentenceBefore: 'Unless you', sentenceAfter: ', you won\'t learn. (listen)', hint: 'listen', correctAnswer: 'listen' }
      ]
    },
    reading: {
      title: 'Future Consequences',
      passage: "If we continue to pollute the air, the climate will change. If the climate changes, the ice will melt. If the ice melts, sea levels will rise. We must act now. If we use more renewable energy, we will help the planet.",
      questions: [
        { id: 1, question: 'What happens if we pollute air?', options: [{ id: 'a', text: 'Climate change', isCorrect: true }, { id: 'b', text: 'Nothing', isCorrect: false }] },
        { id: 2, question: 'If ice melts, sea levels will...', options: [{ id: 'a', text: 'Fall', isCorrect: false }, { id: 'b', text: 'Rise', isCorrect: true }] },
        { id: 3, question: 'How can we help?', options: [{ id: 'a', text: 'Use renewable energy', isCorrect: true }, { id: 'b', text: 'Use more oil', isCorrect: false }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Superstitions', question: 'Finish the sentence: "If you break a mirror..." Do you believe it?' },
      { id: 2, topic: 'Next Year', question: 'What will you do if you pass your English exam?' },
      { id: 3, topic: 'Dilemmas', question: 'If your friend forgets your birthday, what will you do?' }
    ]
  },

  // --- UNIT 10: Used To ---
  {
    id: 'Nav-B1-10',
    level: 'B1',
    title: 'Unit 10: Used to',
    description: 'Past habits and states that are no longer true.',
    timelineMode: 'past_habit',
    leadIn: {
      title: 'Old Habits',
      imageOrText: 'I smoked in 2010. I don\'t smoke now.',
      question: 'Is the habit finished?'
    },
    meaning: {
      concepts: [
        { title: 'Used to', visualDescription: 'A broken chain link.', textEng: 'Repeated past action/state, NOT true now.', textRus: 'Прошлая привычка, не актуальна сейчас.', textUzb: 'O\'tmishdagi odat.' },
        { title: 'Negative', visualDescription: 'Did not use to.', textEng: 'didn\'t use to (No "d" in use).', textRus: 'Не имел привычки.', textUzb: 'Odatga ega emas edi.' }
      ],
      formulas: [
        { label: 'Positive', formula: 'Subject + used to + V1' },
        { label: 'Negative', formula: 'Subject + didn\'t use to + V1' }
      ]
    },
    conceptChecks: [
      { id: 1, question: '"I used to smoke" means I smoke now.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False', isCorrect: true }] },
      { id: 2, question: 'In negative sentences, we write...', options: [{ id: 'a', text: 'Use to', isCorrect: true }, { id: 'b', text: 'Used to', isCorrect: false }] },
      { id: 3, question: 'Can we use "Used to" for present habits?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No (Use usually)', isCorrect: true }] }
    ],
    examples: [
      { type: 'Habit', text: '"I used to bite my nails."' },
      { type: 'State', text: '"She used to have long hair."' },
      { type: 'Negative', text: '"We didn\'t use to like spicy food."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'I _____ play football, but I stopped.', options: [{ id: 'a', text: 'use to', isCorrect: false }, { id: 'b', text: 'used to', isCorrect: true }] },
        { id: 2, question: 'Did you _____ wear glasses?', options: [{ id: 'a', text: 'use to', isCorrect: true }, { id: 'b', text: 'used to', isCorrect: false }] },
        { id: 3, question: 'He _____ use to be nice.', options: [{ id: 'a', text: 'didn\'t', isCorrect: true }, { id: 'b', text: 'don\'t', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'There _____ be a cinema here.', options: [{ id: 'a', text: 'used to', isCorrect: true }, { id: 'b', text: 'was used to', isCorrect: false }] },
        { id: 2, question: 'I used _____ in New York.', options: [{ id: 'a', text: 'to live', isCorrect: true }, { id: 'b', text: 'living', isCorrect: false }] },
        { id: 3, question: '_____ you use to like him?', options: [{ id: 'a', text: 'Did', isCorrect: true }, { id: 'b', text: 'Do', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'NEGATIVE SPELLING? -> ?', options: [{ id: 'a', text: 'Didn\'t used to', isCorrect: false }, { id: 'b', text: 'Didn\'t use to', isCorrect: true }] },
        { id: 2, question: 'PRESENT HABIT? -> ?', options: [{ id: 'a', text: 'I use to', isCorrect: false }, { id: 'b', text: 'I usually', isCorrect: true }] },
        { id: 3, question: 'PAST STATE? -> ?', options: [{ id: 'a', text: 'Used to be', isCorrect: true }, { id: 'b', text: 'Was using', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I', sentenceAfter: 'to have short hair. (used)', hint: 'used', correctAnswer: 'used' },
        { id: 2, sentenceBefore: 'She', sentenceAfter: 'use to cook. (didn\'t)', hint: 'didn\'t', correctAnswer: 'didn\'t' },
        { id: 3, sentenceBefore: 'Did you', sentenceAfter: 'to play piano? (use)', hint: 'use', correctAnswer: 'use' },
        { id: 4, sentenceBefore: 'We', sentenceAfter: 'to live in a flat. (used)', hint: 'used', correctAnswer: 'used' },
        { id: 5, sentenceBefore: 'He never', sentenceAfter: 'to study. (used)', hint: 'used', correctAnswer: 'used' }
      ]
    },
    reading: {
      title: 'Grandpa\'s Stories',
      passage: "When I was young, life used to be very different. We didn't use to have smartphones or the internet. We used to play outside every day. I used to write letters to my friends. Now, kids text each other. I didn't use to like vegetables, but now I love them.",
      questions: [
        { id: 1, question: 'Did they have the internet?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 2, question: 'How did they communicate?', options: [{ id: 'a', text: 'Letters', isCorrect: true }, { id: 'b', text: 'Texts', isCorrect: false }] },
        { id: 3, question: 'Did he always like vegetables?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Childhood', question: 'What games did you use to play when you were a child?' },
      { id: 2, topic: 'Changes', question: 'Did you use to look different 5 years ago? How?' },
      { id: 3, topic: 'Food', question: 'Is there any food you used to hate but now you like?' }
    ]
  },

  // ==========================================
  // LEVEL B1+: INTERMEDIATE
  // ==========================================

  // --- UNIT 1 (B1+): State Verbs & Tense Review ---
  {
    id: 'Nav-B1Plus-01',
    level: 'B1+',
    title: 'Unit 1+: State Verbs',
    description: 'Dynamic vs Stative meanings (Action vs State).',
    timelineMode: 'generic',
    leadIn: {
      title: 'Action or Feeling?',
      imageOrText: 'I *think* about you (mental activity). I *think* you are nice (opinion).',
      question: 'Which one can be continuous?'
    },
    meaning: {
      concepts: [
        { title: 'State Verbs', visualDescription: 'A brain icon (Static).', textEng: 'Thoughts, feelings, possession. NO Continuous.', textRus: 'Глаголы состояния.', textUzb: 'Holat fe\'llari.' },
        { title: 'Dynamic Verbs', visualDescription: 'A running man.', textEng: 'Actions. CAN be continuous.', textRus: 'Глаголы действия.', textUzb: 'Harakat fe\'llari.' },
        { title: 'Dual Meaning', visualDescription: 'Two faces mask.', textEng: 'Some verbs change meaning (e.g. have, think, see).', textRus: 'Двойное значение.', textUzb: 'Ikki xil ma\'no.' }
      ],
      formulas: [
        { label: 'Stative', formula: 'Simple Tense Only' },
        { label: 'Dynamic', formula: 'Simple or Continuous' }
      ]
    },
    conceptChecks: [
      { id: 1, question: '"I am knowing the answer." Correct?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
      { id: 2, question: '"I have a car." (Posession). Can we say "I am having a car"?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
      { id: 3, question: '"I am having lunch." (Eating). Is this correct?', options: [{ id: 'a', text: 'Yes', isCorrect: true }, { id: 'b', text: 'No', isCorrect: false }] }
    ],
    examples: [
      { type: 'State', text: '"I believe you." (NOT am believing)' },
      { type: 'Dual (Opinion)', text: '"I think it\'s good."' },
      { type: 'Dual (Action)', text: '"I am thinking about the problem."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'This soup _____ good.', options: [{ id: 'a', text: 'tastes', isCorrect: true }, { id: 'b', text: 'is tasting', isCorrect: false }] },
        { id: 2, question: 'She _____ the chef right now (tasting soup).', options: [{ id: 'a', text: 'is tasting', isCorrect: true }, { id: 'b', text: 'tastes', isCorrect: false }] },
        { id: 3, question: 'I _____ to you.', options: [{ id: 'a', text: 'am belonging', isCorrect: false }, { id: 'b', text: 'belong', isCorrect: true }] }
      ],
      quizzes: [
        { id: 1, question: 'He _____ a lot of money.', options: [{ id: 'a', text: 'owes', isCorrect: true }, { id: 'b', text: 'is owing', isCorrect: false }] },
        { id: 2, question: 'I _____ what you say.', options: [{ id: 'a', text: 'understand', isCorrect: true }, { id: 'b', text: 'am understanding', isCorrect: false }] },
        { id: 3, question: 'We _____ of moving to Spain.', options: [{ id: 'a', text: 'think', isCorrect: false }, { id: 'b', text: 'are thinking', isCorrect: true }] }
      ],
      kahoot: [
        { id: 1, question: 'WANT -> ?', options: [{ id: 'a', text: 'State', isCorrect: true }, { id: 'b', text: 'Action', isCorrect: false }] },
        { id: 2, question: 'RUN -> ?', options: [{ id: 'a', text: 'State', isCorrect: false }, { id: 'b', text: 'Action', isCorrect: true }] },
        { id: 3, question: 'HAVE (EAT) -> ?', options: [{ id: 'a', text: 'State', isCorrect: false }, { id: 'b', text: 'Action', isCorrect: true }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'I', sentenceAfter: 'you are right. (suppose)', hint: 'suppose', correctAnswer: 'suppose' },
        { id: 2, sentenceBefore: 'This coffee', sentenceAfter: 'great. (smell)', hint: 'smells', correctAnswer: 'smells' },
        { id: 3, sentenceBefore: 'Why are you', sentenceAfter: 'the flowers? (smell)', hint: 'smelling', correctAnswer: 'smelling' },
        { id: 4, sentenceBefore: 'He', sentenceAfter: 'a shower. (have)', hint: 'is having', correctAnswer: 'is having' },
        { id: 5, sentenceBefore: 'I', sentenceAfter: 'it now. (remember)', hint: 'remember', correctAnswer: 'remember' }
      ]
    },
    reading: {
      title: 'The Five Senses',
      passage: "Our senses are fascinating. We see with our eyes and hear with our ears. However, these verbs can be tricky. You can look at a picture (action), but the picture looks nice (state). You can listen to music (action), but the music sounds loud (state). I am looking at a painting now. It looks very old.",
      questions: [
        { id: 1, question: 'Is "see" usually a state verb?', options: [{ id: 'a', text: 'Yes', isCorrect: true }, { id: 'b', text: 'No', isCorrect: false }] },
        { id: 2, question: '"The music sounds loud." Action or State?', options: [{ id: 'a', text: 'Action', isCorrect: false }, { id: 'b', text: 'State', isCorrect: true }] },
        { id: 3, question: '"I am looking at a painting." Action or State?', options: [{ id: 'a', text: 'Action', isCorrect: true }, { id: 'b', text: 'State', isCorrect: false }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Opinions', question: 'What do you think about AI? (Use "think" as opinion).' },
      { id: 2, topic: 'Current Thoughts', question: 'What are you thinking about right now? (Use "think" as action).' },
      { id: 3, topic: 'Possessions', question: 'What belongs to you that is very important?' }
    ]
  },

  // --- UNIT 2 (B1+): Narrative Tenses ---
  {
    id: 'Nav-B1Plus-02',
    level: 'B1+',
    title: 'Unit 2+: Narrative Tenses',
    description: 'Past Simple, Continuous, and Past Perfect.',
    timelineMode: 'narrative_timeline',
    leadIn: {
      title: 'The Timeline',
      imageOrText: 'When I arrived (8:00), the train had left (7:50).',
      question: 'Which happened first?'
    },
    meaning: {
      concepts: [
        { title: 'Past Simple', visualDescription: 'Main events.', textEng: 'Sequence of events.', textRus: 'Последовательность событий.', textUzb: 'Voqealar ketma-ketligi.' },
        { title: 'Past Continuous', visualDescription: 'Background.', textEng: 'Setting the scene.', textRus: 'Фон событий.', textUzb: 'Orqa fon.' },
        { title: 'Past Perfect', visualDescription: 'Jump back.', textEng: 'Action BEFORE the main past time.', textRus: 'Действие ДО прошлого.', textUzb: 'O\'tgan zamondan oldingi ish.' }
      ],
      formulas: [
        { label: 'Past Perfect', formula: 'had + V3' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'We use Past Perfect for the most recent action.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False (Earliest)', isCorrect: true }] },
      { id: 2, question: '"When I arrived, they ate." (Sequence)', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] },
      { id: 3, question: '"When I arrived, they had eaten." (Already finished)', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] }
    ],
    examples: [
      { type: 'Earlier Action', text: '"I realized I had lost my keys."' },
      { type: 'Reason', text: '"He was tired because he had worked hard."' },
      { type: 'Sequence', text: '"He opened the door and walked in."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'When we got to the cinema, the film _____ .', options: [{ id: 'a', text: 'started', isCorrect: false }, { id: 'b', text: 'had started', isCorrect: true }] },
        { id: 2, question: 'I couldn\'t call him because I _____ my phone.', options: [{ id: 'a', text: 'forgot', isCorrect: false }, { id: 'b', text: 'had forgotten', isCorrect: true }] },
        { id: 3, question: 'She _____ lunch when I arrived.', options: [{ id: 'a', text: 'was having', isCorrect: true }, { id: 'b', text: 'had had', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'The road was wet because it _____ .', options: [{ id: 'a', text: 'rained', isCorrect: false }, { id: 'b', text: 'had rained', isCorrect: true }] },
        { id: 2, question: 'After he _____ his work, he went home.', options: [{ id: 'a', text: 'finished', isCorrect: false }, { id: 'b', text: 'had finished', isCorrect: true }] },
        { id: 3, question: 'I _____ never _____ to London before 2010.', options: [{ id: 'a', text: 'had/been', isCorrect: true }, { id: 'b', text: 'have/been', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'EARLIEST ACTION? -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: false }, { id: 'b', text: 'Past Perfect', isCorrect: true }] },
        { id: 2, question: 'BACKGROUND ACTION? -> ?', options: [{ id: 'a', text: 'Past Cont', isCorrect: true }, { id: 'b', text: 'Past Perf', isCorrect: false }] },
        { id: 3, question: 'SEQUENCE? -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Past Cont', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'The house was quiet. Everyone', sentenceAfter: 'to bed. (go)', hint: 'had gone', correctAnswer: 'had gone' },
        { id: 2, sentenceBefore: 'I was hungry because I', sentenceAfter: 'eaten. (not)', hint: 'hadn\'t', correctAnswer: 'hadn\'t' },
        { id: 3, sentenceBefore: 'When the police arrived, the thief', sentenceAfter: 'escaped. (had)', hint: 'had', correctAnswer: 'had' },
        { id: 4, sentenceBefore: 'She', sentenceAfter: 'waiting for 2 hours when he arrived. (been)', hint: 'had been', correctAnswer: 'had been' },
        { id: 5, sentenceBefore: 'I knew I', sentenceAfter: 'seen him before. (had)', hint: 'had', correctAnswer: 'had' }
      ]
    },
    reading: {
      title: 'The Missing Painting',
      passage: "When Inspector Gadget arrived at the museum, the painting had already disappeared. The guard said that he had heard a noise at midnight, but he hadn't seen anything. The window was broken. Someone had climbed in and taken the art.",
      questions: [
        { id: 1, question: 'Did the Inspector arrive before the theft?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 2, question: 'What had the guard heard?', options: [{ id: 'a', text: 'A noise', isCorrect: true }, { id: 'b', text: 'A voice', isCorrect: false }] },
        { id: 3, question: 'How had they entered?', options: [{ id: 'a', text: 'The door', isCorrect: false }, { id: 'b', text: 'The window', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'A Bad Day', question: 'Describe a day when everything went wrong. "I woke up late because I had forgotten to set the alarm..."' },
      { id: 2, topic: 'First Time', question: 'Tell me about a place you went to for the first time. Had you seen photos of it before?' },
      { id: 3, topic: 'Regrets', question: 'Is there anything you wish you had done differently in your past?' }
    ]
  },

  // --- UNIT 5 (B1+): Second Conditional ---
  {
    id: 'Nav-B1Plus-05',
    level: 'B1+',
    title: 'Unit 5+: Second Conditional',
    description: 'Hypothetical / Unreal situations in the present or future.',
    timelineMode: 'parallel_reality',
    leadIn: {
      title: 'The Dream',
      imageOrText: 'Reality: I don\'t have a million dollars. Dream: If I had a million dollars...',
      question: 'Is this real or imaginary?'
    },
    meaning: {
      concepts: [
        { title: 'Condition', visualDescription: 'Dream Bubble.', textEng: 'If + Past Simple (Unreal Present).', textRus: 'Нереальное условие.', textUzb: 'Haqiqatga to\'g\'ri kelmaydigan shart.' },
        { title: 'Result', visualDescription: 'Thought cloud.', textEng: '...would + V1.', textRus: 'Бы ...', textUzb: '...ar edi.' }
      ],
      formulas: [
        { label: 'Formula', formula: 'If + Past Simple, ... would + V1' }
      ]
    },
    conceptChecks: [
      { id: 1, question: 'Second conditional talks about the past.', options: [{ id: 'a', text: 'True', isCorrect: false }, { id: 'b', text: 'False (Unreal Present)', isCorrect: true }] },
      { id: 2, question: 'After "If", we use...', options: [{ id: 'a', text: 'Would', isCorrect: false }, { id: 'b', text: 'Past Simple', isCorrect: true }] },
      { id: 3, question: '"If I were you" is used for advice.', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] }
    ],
    examples: [
      { type: 'Unreal', text: '"If I had wings, I would fly."' },
      { type: 'Advice', text: '"If I were you, I would study harder."' },
      { type: 'Unlikely', text: '"If I won the lottery, I would buy an island."' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'If I _____ rich, I would travel.', options: [{ id: 'a', text: 'am', isCorrect: false }, { id: 'b', text: 'were', isCorrect: true }] },
        { id: 2, question: 'What would you do if you _____ a UFO?', options: [{ id: 'a', text: 'saw', isCorrect: true }, { id: 'b', text: 'see', isCorrect: false }] },
        { id: 3, question: 'I _____ do it if I were you.', options: [{ id: 'a', text: 'wouldn\'t', isCorrect: true }, { id: 'b', text: 'won\'t', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: 'If he _____ time, he would help.', options: [{ id: 'a', text: 'had', isCorrect: true }, { id: 'b', text: 'has', isCorrect: false }] },
        { id: 2, question: 'We would go if it _____ raining.', options: [{ id: 'a', text: 'wasn\'t', isCorrect: true }, { id: 'b', text: 'isn\'t', isCorrect: false }] },
        { id: 3, question: 'If I _____ the answer, I would tell you.', options: [{ id: 'a', text: 'knew', isCorrect: true }, { id: 'b', text: 'know', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'IF CLAUSE TENSE? -> ?', options: [{ id: 'a', text: 'Past Simple', isCorrect: true }, { id: 'b', text: 'Present Simple', isCorrect: false }] },
        { id: 2, question: 'RESULT CLAUSE? -> ?', options: [{ id: 'a', text: 'Will', isCorrect: false }, { id: 'b', text: 'Would', isCorrect: true }] },
        { id: 3, question: 'REAL OR UNREAL? -> ?', options: [{ id: 'a', text: 'Real', isCorrect: false }, { id: 'b', text: 'Unreal', isCorrect: true }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'If I', sentenceAfter: 'the President, I would change the law. (be)', hint: 'were', correctAnswer: 'were' },
        { id: 2, sentenceBefore: 'I', sentenceAfter: 'buy that car if I had the money. (would)', hint: 'would', correctAnswer: 'would' },
        { id: 3, sentenceBefore: 'If you', sentenceAfter: 'exercise, you would feel better. (did)', hint: 'did', correctAnswer: 'did' },
        { id: 4, sentenceBefore: 'What', sentenceAfter: 'you do if you lost your job? (would)', hint: 'would', correctAnswer: 'would' },
        { id: 5, sentenceBefore: 'If I', sentenceAfter: 'you, I would apologize. (be)', hint: 'were', correctAnswer: 'were' }
      ]
    },
    reading: {
      title: 'Hypothetical World',
      passage: "If animals could talk, the world would be a very noisy place. Imagine if dogs could tell us their problems! If cats were in charge, we would all sleep 18 hours a day. It is fun to imagine, but reality is different.",
      questions: [
        { id: 1, question: 'Can animals talk in reality?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No', isCorrect: true }] },
        { id: 2, question: 'What would happen if cats were in charge?', options: [{ id: 'a', text: 'We would sleep more', isCorrect: true }, { id: 'b', text: 'We would work more', isCorrect: false }] },
        { id: 3, question: 'Is the passage about real facts?', options: [{ id: 'a', text: 'Yes', isCorrect: false }, { id: 'b', text: 'No, hypothetical', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Lottery', question: 'If you won a million dollars tomorrow, what would be the first thing you buy?' },
      { id: 2, topic: 'Superpower', question: 'If you could have any superpower (flight, invisibility...), which would you choose and why?' },
      { id: 3, topic: 'History', question: 'If you could meet any person from history, who would you meet?' }
    ]
  },

  // --- UNIT 8 (B1+): Reported Speech ---
  {
    id: 'Nav-B1Plus-08',
    level: 'B1+',
    title: 'Unit 8+: Reported Speech',
    description: 'Reporting what others said. Tense backshift.',
    timelineMode: 'generic',
    leadIn: {
      title: 'The Gossip',
      imageOrText: 'John said: "I am happy." -> Jane tells Bob: "John said he WAS happy."',
      question: 'Why did "am" change to "was"?'
    },
    meaning: {
      concepts: [
        { title: 'Direct Speech', visualDescription: 'Speech bubble with quotes.', textEng: 'Exact words.', textRus: 'Прямая речь.', textUzb: 'Ko\'chirma gap.' },
        { title: 'Reported Speech', visualDescription: 'Thought bubble back in time.', textEng: 'Reporting later. Tenses usually shift back.', textRus: 'Косвенная речь.', textUzb: 'O\'zlashtirma gap.' },
        { title: 'Backshift', visualDescription: 'Arrow pointing left (Past).', textEng: 'Present -> Past; Past -> Past Perfect; Will -> Would.', textRus: 'Сдвиг времени назад.', textUzb: 'Zamonning orqaga surilishi.' }
      ],
      formulas: [
        { label: 'Present ->', formula: 'Past Simple' },
        { label: 'Past ->', formula: 'Past Perfect' },
        { label: 'Will ->', formula: 'Would' }
      ]
    },
    conceptChecks: [
      { id: 1, question: '"I love you" -> He said he _____ me.', options: [{ id: 'a', text: 'loved', isCorrect: true }, { id: 'b', text: 'loves', isCorrect: false }] },
      { id: 2, question: '"I went home" -> He said he _____ home.', options: [{ id: 'a', text: 'went', isCorrect: false }, { id: 'b', text: 'had gone', isCorrect: true }] },
      { id: 3, question: 'Pronouns (I, my) usually change in reported speech.', options: [{ id: 'a', text: 'True', isCorrect: true }, { id: 'b', text: 'False', isCorrect: false }] }
    ],
    examples: [
      { type: 'Present', text: '"I am busy" -> He said he was busy.' },
      { type: 'Future', text: '"I will call" -> He said he would call.' },
      { type: 'Question', text: '"Where are you?" -> He asked where I was.' }
    ],
    exercises: {
      tests: [
        { id: 1, question: 'She said she _____ hungry.', options: [{ id: 'a', text: 'is', isCorrect: false }, { id: 'b', text: 'was', isCorrect: true }] },
        { id: 2, question: 'He told me he _____ visited Paris.', options: [{ id: 'a', text: 'has', isCorrect: false }, { id: 'b', text: 'had', isCorrect: true }] },
        { id: 3, question: 'They said they _____ help.', options: [{ id: 'a', text: 'would', isCorrect: true }, { id: 'b', text: 'will', isCorrect: false }] }
      ],
      quizzes: [
        { id: 1, question: '"I can swim" -> He said he _____ swim.', options: [{ id: 'a', text: 'could', isCorrect: true }, { id: 'b', text: 'can', isCorrect: false }] },
        { id: 2, question: 'She asked me where _____ .', options: [{ id: 'a', text: 'was I', isCorrect: false }, { id: 'b', text: 'I was', isCorrect: true }] },
        { id: 3, question: '"Must" changes to _____ .', options: [{ id: 'a', text: 'had to', isCorrect: true }, { id: 'b', text: 'musted', isCorrect: false }] }
      ],
      kahoot: [
        { id: 1, question: 'AM/IS/ARE -> ?', options: [{ id: 'a', text: 'Was/Were', isCorrect: true }, { id: 'b', text: 'Been', isCorrect: false }] },
        { id: 2, question: 'HAVE -> ?', options: [{ id: 'a', text: 'Had', isCorrect: true }, { id: 'b', text: 'Has', isCorrect: false }] },
        { id: 3, question: 'TOMORROW -> ?', options: [{ id: 'a', text: 'The next day', isCorrect: true }, { id: 'b', text: 'Yesterday', isCorrect: false }] }
      ],
      gapFill: [
        { id: 1, sentenceBefore: 'He said he', sentenceAfter: 'tired. (be)', hint: 'was', correctAnswer: 'was' },
        { id: 2, sentenceBefore: 'She told me she', sentenceAfter: 'buy a car. (will)', hint: 'would', correctAnswer: 'would' },
        { id: 3, sentenceBefore: 'I asked him what he', sentenceAfter: 'doing. (is)', hint: 'was', correctAnswer: 'was' },
        { id: 4, sentenceBefore: 'They said they', sentenceAfter: 'finished. (have)', hint: 'had', correctAnswer: 'had' },
        { id: 5, sentenceBefore: 'He said he', sentenceAfter: 'call later. (can)', hint: 'could', correctAnswer: 'could' }
      ]
    },
    reading: {
      title: 'The Interview',
      passage: "Yesterday I interviewed a famous actor. He said that he loved his job but he was tired. He told me that he had just finished a new movie. He said he would take a holiday the following month. He asked me if I liked his films.",
      questions: [
        { id: 1, question: 'What did he say about his job?', options: [{ id: 'a', text: 'He hated it', isCorrect: false }, { id: 'b', text: 'He loved it', isCorrect: true }] },
        { id: 2, question: 'What had he just finished?', options: [{ id: 'a', text: 'A movie', isCorrect: true }, { id: 'b', text: 'A book', isCorrect: false }] },
        { id: 3, question: 'What did he ask the reporter?', options: [{ id: 'a', text: 'For money', isCorrect: false }, { id: 'b', text: 'If he liked his films', isCorrect: true }] }
      ]
    },
    speaking: [
      { id: 1, topic: 'Messages', question: 'Report a message you received recently. "My mom called and said..."' },
      { id: 2, topic: 'News', question: 'Tell me a piece of news you heard. "The news said that..."' },
      { id: 3, topic: 'Questions', question: 'What did I just ask you? Report my question.' }
    ]
  }
];
