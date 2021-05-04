import Styled from "styled-components";
import img from "../img/bg-boost-desktop.svg";

export const BoostStyle = Styled.div`
  background-color: hsl(257, 27%, 26%);
  position: relative;
  bottom: 6rem;
  background-image: url(${img});
  text-align: center;
  padding: 4rem;
  background-size: cover;

  h1 {
    color: white;
    margin-bottom: 1rem;
  }

  @media (max-width: 375px) {
    bottom: 35rem;
    padding: 2rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
