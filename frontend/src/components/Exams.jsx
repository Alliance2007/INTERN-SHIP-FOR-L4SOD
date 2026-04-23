import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Exams() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language"],
      answer: "Library",
    },
    {
      question: "HTML is used for?",
      options: ["Styling", "Structure", "Database"],
      answer: "Structure",
    },
    {
      question: "CSS is used for?",
      options: ["Design", "Logic", "Server"],
      answer: "Design",
    },
    {
      question: "JavaScript is used for?",
      options: ["Interactivity", "Database", "OS"],
      answer: "Interactivity",
    },
    {
      question: "Which company created React?",
      options: ["Google", "Facebook", "Microsoft"],
      answer: "Facebook",
    },
    {
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "Java Syntax", "JSON XML"],
      answer: "JavaScript XML",
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef"],
      answer: "useState",
    },
    {
      question: "Which hook runs side effects?",
      options: ["useState", "useEffect", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "Which tag is used for links?",
      options: ["<a>", "<p>", "<div>"],
      answer: "<a>",
    },
    {
      question: "CSS property for text color?",
      options: ["font-size", "color", "background"],
      answer: "color",
    },
    {
      question: "JS comment symbol?",
      options: ["//", "##", "<!-- -->"],
      answer: "//",
    },
    {
      question: "What is Node.js?",
      options: ["Frontend", "Backend runtime", "Database"],
      answer: "Backend runtime",
    },
    {
      question: "Which is NoSQL DB?",
      options: ["MySQL", "MongoDB", "PostgreSQL"],
      answer: "MongoDB",
    },
    {
      question: "HTTP method to get data?",
      options: ["POST", "GET", "PUT"],
      answer: "GET",
    },
    {
      question: "Version control tool?",
      options: ["Git", "Docker", "NPM"],
      answer: "Git",
    },
    {
      question: "DBMS in full word",
      options: [
        "Digital Basical manager system",
        "DataBase management System",
        "Doctor bannar make system",
      ],
      answer: "DataBase management System",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [started, setStarted] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleStart = () => {
    if (!name.trim() || !password.trim()) {
      alert("Enter name and password");
      return;
    }
    setStarted(true);
  };

  const handleAnswer = (option) => {
    if (locked) return;
    setLocked(true);

    const isCorrect = option === questions[index].answer;

    const updatedScore = isCorrect ? score + 1 : score;
    setScore(updatedScore);

    const next = index + 1;

    setTimeout(() => {
      if (next < questions.length) {
        setIndex(next);
        setLocked(false);
      } else {
        navigate("/result", {
          state: {
            name,
            score: updatedScore,
            total: questions.length,
          },
        });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Exam System
        </h1>

        {!started ? (
          <div>
            <input
              className="border p-3 w-full mb-4 rounded text-center"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="password"
              className="border p-3 w-full mb-4 rounded text-center"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleStart}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-800"
            >
              Start Exam
            </button>

            <p className="text-center mt-4 text-gray-600">
              No account?{" "}
              <Link to="/registration" className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Question {index + 1} / {questions.length}
            </p>

            <h2 className="text-xl font-bold mb-4">
              {questions[index].question}
            </h2>

            <div className="space-y-3">
              {questions[index].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full p-3 bg-gray-100 rounded hover:bg-gray-300"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Exams;