import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto 0 auto;
`;

export const NavFlex = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  /* margin: auto;
  width: 90%; */

  a {
    color: hsl(0, 0%, 75%);
    font-size: 18px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #000000;
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    margin-left: 0;

    a {
      color: white;
    }
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

export const Mobile = styled.div`
  @media (max-width: 375px) {
    /* display: flex; */
  }
`;

export const MobileFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  .split {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 375px) {
    flex-direction: column;

    .first {
      border-bottom: 0.5px solid hsl(0, 0%, 75%);
      padding-bottom: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  @media (max-width: 375px) {
    flex-direction: column;
    position: fixed;
    justify-items: center;
    /* top: 6rem; */
    background-color: hsl(257, 27%, 26%);
    font-weight: bold;
    width: 20rem;
    padding: 3rem;
    margin: auto;
    /* bottom: 38rem; */
    right: 0;
    left: 0;
    border-radius: 15px;
    height: ${({ isOpen }) => (isOpen ? "21rem" : "0rem")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: all 0.3s ease-in;
    overflow: hidden;
    z-index: 100;
  }
`;
