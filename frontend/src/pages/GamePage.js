import React, { useState } from "react";

const questions = [
  {
    question: "Which is the most widely grown crop in India?",
    options: ["Wheat", "Rice", "Maize", "Sugarcane"],
    answer: "Rice",
  },
  {
    question: "What is the main source of irrigation in India?",
    options: ["Canals", "Wells", "Rivers", "Rainwater"],
    answer: "Canals",
  },
  {
    question: "What is crop rotation?",
    options: [
      "Growing the same crop repeatedly",
      "Growing two or more crops simultaneously",
      "Changing crops in the same field seasonally",
      "Growing crops without water",
    ],
    answer: "Changing crops in the same field seasonally",
  },
  {
    question: "What is the ideal pH range for most crops?",
    options: ["3-4", "5-6", "6-7", "7-8"],
    answer: "6-7",
  },
  {
    question: "What is the best method of pest management in farming?",
    options: [
      "Chemical pesticides",
      "Biological control",
      "Crop rotation",
      "Manual removal",
    ],
    answer: "Biological control",
  },
  {
    question: "What is the process of water conservation in agriculture?",
    options: [
      "Drip irrigation",
      "Flood irrigation",
      "Rainwater harvesting",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which crop is most sensitive to waterlogging?",
    options: ["Rice", "Wheat", "Cotton", "Sugarcane"],
    answer: "Cotton",
  },
  {
    question: "What is the primary nutrient required for plant growth?",
    options: ["Nitrogen", "Phosphorus", "Potassium", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is sustainable agriculture?",
    options: [
      "Using organic fertilizers",
      "Avoiding chemical pesticides",
      "Conserving natural resources while growing food",
      "Monocropping",
    ],
    answer: "Conserving natural resources while growing food",
  },
  {
    question: "Which crop is typically grown in winter season in India?",
    options: ["Rice", "Barley", "Cotton", "Sugarcane"],
    answer: "Barley",
  },
];

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption(""); // Clear selection for the next question

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setIsQuizCompleted(false);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {isQuizCompleted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Quiz Completed!
            </h2>
            <p className="text-xl text-gray-600">
              Your Score:{" "}
              <span className="text-green-500 font-bold">{score}</span>/
              {questions.length}
            </p>
            <button
              onClick={handleRestartQuiz}
              className="mt-5 bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              {questions[currentQuestionIndex].question}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`py-3 px-6 rounded-lg border transition transform ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-6 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-300 transition duration-200"
              disabled={!selectedOption}
            >
              {currentQuestionIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
