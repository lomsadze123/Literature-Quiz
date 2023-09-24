import styled from "styled-components";
import otar from "../assets/chiladze.jpg";
import { useState } from "react";

const FirstQuestion = () => {
  const [answer, setAnswer] = useState(false);

  const handleAnswer = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    if (e.target instanceof HTMLLIElement) {
      const clickedItemText = e.target.textContent;
      console.log(clickedItemText);
      setAnswer(true);
    }
  };

  return (
    <Div>
      <h2>რომელია ჩამოთვლილთაგან ოთარ ჭილაძის ნაწარმოები ?</h2>
      <img src={otar} alt="otar chiladze" />
      <ul onClick={(e) => handleAnswer(e)}>
        <Li>მთვარის მოტაცება</Li>
        <Li>ოთარაანთ ქვრივი</Li>
        <Li>გზაზე ერთი კაცი მიდიოდა</Li>
        <Li>მარტოობის ასი წელიწადი</Li>
      </ul>
      {answer && <button>შემდეგი</button>}
    </Div>
  );
};

export default FirstQuestion;

const Div = styled.div`
  max-width: 80rem;
  width: 100%;
  padding: 5rem;
  border-radius: 1rem;
  background-color: #e9e6e6;
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  ul {
    padding: 4rem 0 0 2rem;
  }
  img {
    display: block;
    margin: 2rem auto 0 auto;
    max-width: 40rem;
    width: 100%;
    height: auto;
  }
  button {
    display: block;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    font-size: 2.5rem;
    border: 0;
    border-radius: 1rem;
    background-color: #ffd30d;
    letter-spacing: 0.2rem;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
  }

  @media (min-width: 1100px) {
    button {
      cursor: pointer;
    }
    button:hover {
      color: #ffd30d;
      background-color: #252525;
    }
  }
`;

const Li = styled.li`
  list-style: none;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  background-color: #ccc8c8;
  border-radius: 0.5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;

  @media (min-width: 1100px) {
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
`;
