import { useState } from "react";
import { Li } from "../App";
import ImagesDaTa from "./ImagesData";
import QuestionsData from "./QuestionsData";
import Result from "./Result";

interface Types {
  answer: boolean;
  setAnswer: (answer: boolean) => void;
  children: JSX.Element | null;
  questionId: number;
}

const FirstQuestion = ({ answer, setAnswer, children, questionId }: Types) => {
  const [check, setCheck] = useState(-1);
  const [score, setScore] = useState(0);

  const handleAnswer = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    if (answer) {
      return;
    }
    if (index !== -1) {
      setCheck(index);
    }
    if (e.target instanceof HTMLLIElement) {
      setAnswer(true);
      const correct = QuestionsData.map((questions) => questions.correctAnswer);
      if (correct[questionId] === e.target.textContent) {
        setScore(score + 1);
      }
    }
  };

  return (
    <>
      {questionId !== 10 ? (
        <main>
          {QuestionsData.map(
            (questions) =>
              questions.id === questionId && (
                <div key={questions.id}>
                  <h2>{questions.question}</h2>
                  <img src={ImagesDaTa[questionId]} alt="writers image" />
                  <ul>
                    {questions.options.map((option, index) => (
                      <Li
                        onClick={(e) => handleAnswer(e, index)}
                        errorColor={check === index && answer}
                        color={answer && option === questions.correctAnswer}
                        key={index}
                      >
                        {option}
                      </Li>
                    ))}
                  </ul>
                </div>
              )
          )}
          {children}
        </main>
      ) : (
        <Result score={score} />
      )}
    </>
  );
};

export default FirstQuestion;
