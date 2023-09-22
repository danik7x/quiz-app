"use client";

import { useState } from "react";
import { quizData } from "../app/quizData";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
  }

  const handleAnswerSelected = (answerIndex: number) => {
    if (answerIndex === quizData[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
      console.log(
        "Correct!",
        score,
        quizData[currentQuestion].correctAnswerIndex
      );
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`You scored ${score + 1} out of ${quizData.length}`);
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-800 h-auto">
      <h1 className="text-2xl text-gray-200">Quiz App</h1>
      <div>
        {currentQuestion < quizData.length ? (
          <div className="flex flex-col items-center ">
            <h1>
              Question {currentQuestion + 1} / {quizData.length}
            </h1>
            <p className="text-lg font-semibold shadow-sm">
              {quizData[currentQuestion].question}
            </p>
            <ul className="pt-2 flex flex-col items-center">
              {quizData[currentQuestion].options.map(
                (option: any, index: any) => (
                  <li
                    className="hover:cursor-pointer hover:text-gray-400 text-base font-medium"
                    key={index}
                    onClick={() => handleAnswerSelected(index)}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
            <button
              className="w-auto h-auto mt-2 p-2 bg-gray-400 rounded-md hover:bg-gray-500 hover:cursor-pointer hover:text-gray-100"
              onClick={restartQuiz}
            >
              Restart
            </button>
          </div>
        ) : (
          <div>
            <h1>Quiz Completed!</h1>
            <p>Your Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
}
