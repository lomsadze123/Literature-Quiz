import styled from "styled-components";
import ImagesDaTa from "./ImagesData";
import { Link } from "react-router-dom";

const Result = ({ score }: { score: number }) => {
  const result = () => {
    if (score < 4) {
      return (
        <>
          <h2>
            ოჰო, მოსალოცად გვქონია საქმე, შენ ხარ მარტინ იდენი რუთის გაცნობამდე
          </h2>
          <img src={ImagesDaTa[12]} alt="funny image" />
        </>
      );
    } else if (score > 3 && score < 8) {
      return (
        <>
          <h2>არაგიშავს, ცუდი შედეგი არ არის, შენ ხარ პიოტრ პუსტოტა</h2>
          <img src={ImagesDaTa[ImagesDaTa.length - 1]} alt="funny image" />
        </>
      );
    } else if (score > 7) {
      return (
        <>
          <h2>
            ყოჩაღ, კარგი შედეგია, შენ ხარ მაკულატურის მწნეხავი ჰანტა, გილოცავთ
          </h2>
          <img src={ImagesDaTa[14]} alt="funny image" />
        </>
      );
    }
  };

  return (
    <main>
      <Div>
        <h3> {score} / 10</h3>
        {result()}
        <Link to="/">
          <button>დაბრუნება</button>
        </Link>
      </Div>
    </main>
  );
};

export default Result;

const Div = styled.div`
  h3 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #b40404;
  }
  img {
    margin: 3rem auto !important;
  }
  h2 {
    color: #b40404c1;
  }
`;
