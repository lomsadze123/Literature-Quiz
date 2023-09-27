import { useState } from "react";
import FirstQuestion from "./FirstQuestion";

const Questions = () => {
  const [answer, setAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(0);

  const nextQuestion = () => {
    setAnswer(false);
    if (questionId < 10) {
      setQuestionId(questionId + 1);
    }
  };

  return (
    <>
      <FirstQuestion
        answer={answer}
        setAnswer={setAnswer}
        questionId={questionId}
      >
        {answer ? (
          <button onClick={nextQuestion}>
            {questionId === 9 ? "დასასრული" : "შემდეგი"}
          </button>
        ) : null}
      </FirstQuestion>
    </>
  );
};

export default Questions;
