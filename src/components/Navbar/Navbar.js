import React from "react";
import { Nav, NavFlex, Hamburger } from "./NavStyles";
import { BtnSm } from "../styles/Button";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <div>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Nav>
        <NavFlex>
          <a href="#">
            <li>
              <img src={logo} alt="" />
            </li>
          </a>
          <a href="#">
            <li>Features</li>
          </a>
          <a href="#">
            <li>Pricing</li>
          </a>
          <a href="#">
            <li>Resources</li>
          </a>
        </NavFlex>
        <NavFlex>
          <a href="#">
            <li>Login</li>
          </a>
          <BtnSm href="#" className="btn-round-sm">
            <li>Sign Up</li>
          </BtnSm>
        </NavFlex>
      </Nav>
    </div>
  );
};

export default Navbar;
