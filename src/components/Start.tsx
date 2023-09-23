import styled from "styled-components";
import windows11 from "../assets/windows11.jpeg";
import error from "../assets/error.png";
import errorSound from "../assets/erro.mp3";
import { useState } from "react";

const Start = () => {
  const [error, setError] = useState(true);

  const handleButton = () => {
    setError(false);
    const audio = new Audio(errorSound);
    audio.play();
  };

  return (
    <div>
      {error ? (
        <Div>
          <h1>ქვიზის დაწყება</h1>
          <div>
            {["დიახ", "დიახ"].map((item, index) => (
              <button key={index} onClick={handleButton}>
                {item}
              </button>
            ))}
          </div>
        </Div>
      ) : (
        <ErrorDiv>
          <h2>შეცდომა გეგონა ?</h2>
          <button onClick={() => console.log("sad")}>კი</button>
        </ErrorDiv>
      )}
    </div>
  );
};

export default Start;

const Div = styled.div`
  text-align: center;
  h1 {
    color: #242323;
    font-size: 4rem;
    margin-bottom: 5rem;
    letter-spacing: 0.7rem;
  }

  button {
    background-color: #161616;
    font-size: 4rem;
    border: 0;
    border-radius: 0.8rem;
    color: white;
    padding: 0.5rem 2rem 1rem;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  @media (min-width: 1100px) {
    background: url(${windows11}) no-repeat;
    padding: 24.5rem 25.8rem;
    button {
      cursor: pointer;
      transition: background-color 0.5s ease-in-out, font-size 0.5s ease-in-out;
    }
    button:hover {
      background-color: #292929;
      font-size: 3.5rem;
    }
  }
`;

const ErrorDiv = styled.div`
  background: url(${error}) no-repeat;
  padding: 11.8rem 3rem 3.5rem 8rem;
  h2 {
    font-size: 2.4rem;
  }
  button {
    font-size: 2.8rem;
    background: transparent;
    border: 0;
    margin-top: 2.6rem;
    padding: 0 3rem;
    margin-left: -2.5rem;
  }

  @media (min-width: 1100px) {
    button {
      cursor: pointer;
    }
  }
`;
