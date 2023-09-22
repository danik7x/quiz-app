interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export const quizData: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    correctAnswerIndex: 2,
  },
  {
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    correctAnswerIndex: 1,
  },
  {
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    correctAnswerIndex: 0,
  },
  {
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    correctAnswerIndex: 3,
  },
  {
    question: "How many sides does a heptagon have?",
    options: ["6", "7", "8", "9"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the capital of the US?",
    options: ["New York", "Washington DC", "Los Angeles", "London"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the largest country in the world?",
    options: ["Russia", "Canada", "China", "United States"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswerIndex: 3,
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the radius of the Earth?",
    options: ["3,959 miles", "4,000 miles", "4,034 miles", "4,200 miles"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Hong Kong", "Shenzhen"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the capital of Germany?",
    options: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Hyderabad"],
    correctAnswerIndex: 1,
  },
];
