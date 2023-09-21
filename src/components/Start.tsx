import styled from "styled-components";
import windows11 from "../assets/windows11.jpeg";

const Start = () => {
  return (
    <Div>
      <h1>ქვიზის დაწყება</h1>
      <div>
        <button>დიახ</button>
        <button>დიახ</button>
      </div>
    </Div>
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
  }
`;
