import styled from "styled-components";
import img from "../img/bg-shorten-desktop.svg";

export const Shorten = styled.div`
  text-align: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 80%;
  margin: 3rem auto 2rem auto;
  height: 10rem;
  border-radius: 10px;
  padding: 3rem;

  input {
    padding: 1.5rem;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    width: 40rem;
    font-weight: 500;
    margin-right: 1rem;
  }

  @media (max-width: 375px) {
    width: 20rem;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 1.5rem;

    input {
      width: 18rem;
      margin-right: 0;
      height: 2rem;
      margin-bottom: 1rem;
    }
  }
`;
