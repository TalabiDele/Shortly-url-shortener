import styled from "styled-components";

export const BtnSm = styled.a`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 30px;
  width: 6rem;
  text-align: center;
  padding: 0.2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
  }

  li {
    color: white;
  }

  @media (max-width: 375px) {
    width: 13rem;
    height: 3rem;
    padding: 0.6rem;
    margin-top: -1rem;
  }
`;

export const BtnBgRound = styled.a`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 30px;
  width: 30rem;
  text-align: center;
  padding: 0.5rem 2rem;
  font-size: 18px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
  }
`;

export const BtnBg = styled.button`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 10px;
  width: 30rem;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 18px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 375px) {
    width: 18rem;
    height: 2rem;
    display: grid;
    align-content: center;
  }
`;
