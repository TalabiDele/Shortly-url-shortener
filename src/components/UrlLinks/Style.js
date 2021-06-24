import Styled from "styled-components";

export const UrlList = Styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: center; */
  /* text-align: center; */
  margin: 0 auto 1rem auto;
  width: 80%;
  position: relative;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h3 {
      color: hsl(180, 66%, 49%);
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%; 
    /* justify-items: center; */

    div {
      grid-template-columns: repeat(1, 1fr);

      h3 {
        color: hsl(180, 66%, 49%);
      }
    }

    h3 {
      font-size: 0.6rem;
      width: 20%;
      margin: auto;
    }
  }

`;

export const MainUrl = Styled.div`
  @media (max-width: 375px) {
    width: 100%;
    /* margin: auto; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 0.5px solid #585858;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ShortenedUrl = Styled.div`
  color: hsl(180, 66%, 49%);

  @media (max-width: 375px) {
    margin-bottom: 1rem;
  }
`;
