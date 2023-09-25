import { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import { Link } from "react-router-dom";

const Questions = () => {
  const [answer, setAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(0);

  const nextQuestion = () => {
    setAnswer(false);
    if (questionId < 1) {
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
          <Link to={`/quiz/${questionId + 1}`}>
            <button onClick={nextQuestion}>შემდეგი</button>
          </Link>
        ) : null}
      </FirstQuestion>
    </>
  );
};

export default Questions;
