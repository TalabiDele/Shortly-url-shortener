import Styled from "styled-components";

export const FooterStyle = Styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: hsl(255, 11%, 22%);
  padding: 2rem 5rem;
  position: absolute;
  width: 100%;
  top: 107.5rem;  

  

  h1 {
    color: white;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  a {
    color: hsl(0, 0%, 75%);
  }

  img {
    margin: 0 1rem;
  }

  @media (max-width: 375px) {
    top: 148.6rem;
    bottom: 0;
    height: 40rem;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    justify-items: center;

    img {
      margin: 0 0.5rem;
    }
  }
`;
