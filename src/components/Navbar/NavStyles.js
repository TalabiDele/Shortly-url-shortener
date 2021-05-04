import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto 0 auto;
`;

export const NavFlex = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: hsl(0, 0%, 75%);
    font-size: 18px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    background: hsl(0, 0%, 75%);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 375px) {
    display: flex;
  }
`;
