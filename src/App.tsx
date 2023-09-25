import styled from "styled-components";
import Start from "./components/Start";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Questions from "./components/Questions";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Start />} />
        <Route path="/quiz/:id" element={<Questions />} />
      </Route>
    )
  );

  return (
    <Div>
      <RouterProvider router={router} />
    </Div>
  );
}

export default App;

const Div = styled.div`
  main {
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
  }
`;

export const Li = styled.li<{ errorColor: boolean; color: boolean }>`
  list-style: none;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  background-color: #ccc8c8;
  border-radius: 0.5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;

  background-color: ${(props) => (props.errorColor ? "#ff8a8a" : "")};
  background-color: ${(props) => (props.color ? " #a1ff8a" : "")};

  @media (min-width: 1100px) {
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
`;
