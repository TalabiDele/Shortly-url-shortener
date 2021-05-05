import styled from "styled-components";

export const HeroSection = styled.div`
  @media (min-width: 1440px) {
    /* width: 80%; */
    display: flex;
    margin: 3rem 0 auto;
    align-items: center;
    overflow: hidden;

    div {
      width: 40%;
      margin-left: 9.5rem;
    }

    h1 {
      font-size: 4rem;
      line-height: 1.2;
      color: hsl(260, 8%, 14%);
    }

    p {
      font-size: 18px;
      color: hsl(0, 0%, 75%);
      margin-bottom: 2rem;
      width: 80%;
    }

    img {
      position: relative;
      left: 5rem;
    }
  }

  @media (max-width: 375px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    text-align: center;
    padding-bottom: 2rem;

    h1 {
      color: hsl(255, 11%, 22%);
      line-height: 1;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    p {
      color: hsl(0, 0%, 75%);
      margin-bottom: 1.5rem;
    }

    img {
      width: 30rem;
    }
  }
`;
