import { useState } from "react";
import { Li } from "../App";
import ImagesDaTa from "./ImagesData";
import QuestionsData from "./QuestionsData";

interface Types {
  answer: boolean;
  setAnswer: (answer: boolean) => void;
  children: JSX.Element | null;
  questionId: number;
}

const FirstQuestion = ({ answer, setAnswer, children, questionId }: Types) => {
  const [check, setCheck] = useState(-1);

  const handleAnswer = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    if (answer) {
      return;
    }

    if (e.target instanceof HTMLLIElement) {
      setAnswer(true);
    }

    if (index !== -1) {
      setCheck(index);
    }
  };

  return (
    <main>
      {QuestionsData.map(
        (questions) =>
          questions.id === questionId && (
            <div key={questions.id}>
              <h2>{questions.question}</h2>
              <img src={ImagesDaTa[questionId]} alt="otar chiladze" />
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
  );
};

export default FirstQuestion;
