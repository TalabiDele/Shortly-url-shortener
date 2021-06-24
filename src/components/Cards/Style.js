import Styled from "styled-components";

export const FlexDisplay = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 5rem auto 0rem auto;
  padding-bottom: 8rem;

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 4rem auto 0rem auto;
    padding-bottom: 5rem;
    text-align: center;
    width: 100%;
  }
`;

export const CardStyle = Styled.div`
  background-color: white;
  margin: 2rem auto 2rem auto;
  padding: 1rem;
  border-radius: 5px;
  width: 90%;

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
  width: 80rem;
  height: 0.5rem;
  overflow: hidden;
  position: absolute;
  left: 20rem;
  right: 0;
  bottom: 15rem;
  z-index: -1;

  @media (max-width: 375px) {
    width: 0.5rem;
    height: 40rem;
    left: 10.7rem;
    bottom: 10rem;
    display: grid;
    justify-items: center;
    background-color: hsl(180, 66%, 49%);
    right: 0;
  }
`;
