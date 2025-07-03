
import React, { useState } from 'react';

function Quiz({ level = "Beginner" }) {
  const questions = [
    {
      question: "What does CPT stand for?",
      options: ["Current Procedural Terminology", "Certified Patient Technician", "Claim Payment Tracker"],
      answer: 0
    },
    {
      question: "Which form is used to submit claims?",
      options: ["CMS-1500", "W-2", "1040EZ"],
      answer: 0
    }
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (i) => {
    if (i === questions[index].answer) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div>
      <h3>{level} Quiz</h3>
      {!completed ? (
        <div>
          <p>{questions[index].question}</p>
          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)}>{opt}</button>
          ))}
        </div>
      ) : (
        <p>Quiz completed! Score: {score}/{questions.length}</p>
      )}
    </div>
  );
}

export default Quiz;
