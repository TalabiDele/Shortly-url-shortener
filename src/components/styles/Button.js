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

export const BtnPrimary = styled.button`
  width: 10rem;
  background-color: ${({ isCopied }) =>
    isCopied ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)"};
  border: none;
  padding: 1rem;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  height: 3rem;

  &:hover {
    background-color: ${({ isCopied }) =>
      isCopied ? "hsl(257, 27%, 30%)" : "hsl(180, 66%, 70%)"};
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const BtnSecondary = styled.button`
  width: 15rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  background-color: hsl(180, 66%, 49%);

  &:hover {
    background-color: hsl(180, 66%, 70%);
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 4rem;
  }
`;
