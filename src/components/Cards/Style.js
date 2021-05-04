import Styled from "styled-components";

export const FlexDisplay = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 5rem auto 0 auto;

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 4rem auto 4rem auto;
    text-align: center;
    width: 100%;
  }
`;

export const CardStyle = Styled.div`
  background-color: white;
  margin: 2rem 2rem 8rem 2rem;
  padding: 1rem;
  border-radius: 5px;

  img {
    background-color: hsl(260, 8%, 14%);
    padding: 1rem;
    border-radius: 50%;
    background-size: cover;
    background-clip: padding-box;
    background-position: center;
    object-fit: contain;
    position: relative;
    bottom: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    position: relative;
    bottom: 2rem;
  }

  p {
    font-size: 15px;
    color: hsl(0, 0%, 75%);
    position: relative;
    bottom: 2rem;
  }

  @media (max-width: 375px) {
    margin: 2rem;
  }
`;

export const CardAlignOne = Styled.div`
  position: relative;
  top: 2rem;
`;

export const CardAlignTwo = Styled.div`
  position: relative;
  top: 4rem;
`;

export const Line = Styled.div`
  background-color: hsl(180, 66%, 49%);
  width: 50rem;
  height: 0.5rem;
  overflow: hidden;
  position: relative;
  left: 20rem;
  right: 0;
  bottom: 15rem;
  z-index: -1;

  @media (max-width: 375px) {
    width: 0.5rem;
    height: 30rem;
    left: 10.7rem;
    bottom: 50rem;
    display: grid;
    justify-items: center;
  }
`;
