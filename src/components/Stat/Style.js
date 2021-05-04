import Styled from "styled-components";

export const TextCenter = Styled.div`
  background-color: hsl(0, 0%, 91.37254901960785%);
  position: relative;
  bottom: 6rem;
  z-index: -1;
`;

export const Header = Styled.div`
  text-align: center; 
  padding-top: 10rem;
  font-size: 2rem;
  color: hsl(260, 8%, 14%);

  @media (max-width: 375px) {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

export const Paragraph = Styled.div`
  text-align: center;
  font-size: 18px;
  color:hsl(257, 7%, 63%);
  width: 40%;
  margin: auto;

  @media (max-width: 375px) {
    width: 100%;
  }
`;
