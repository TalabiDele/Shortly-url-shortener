import styled from "styled-components";

export const BtnSm = styled.a`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 30px;
  width: 6rem;
  text-align: center;
  padding: 0.2rem;

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
`;

export const BtnBg = styled.a`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 10px;
  width: 30rem;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 18px;

  @media (max-width: 375px) {
    width: 18rem;
    height: 2rem;
    display: grid;
    align-content: center;
  }
`;
