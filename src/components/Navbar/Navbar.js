import React, { useState } from "react";
import {
  Nav,
  NavFlex,
  Hamburger,
  Mobile,
  MobileFlex,
  MobileMenu,
} from "./NavStyles";
import { BtnSm } from "../styles/Button";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Mobile>
      <Nav>
        <MobileFlex>
          <div>
            <a href="#">
              <li>
                <img src={logo} alt="" />
              </li>
            </a>
          </div>
          <MobileMenu isOpen={isOpen}>
            <NavFlex className="first">
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
          </MobileMenu>
        </MobileFlex>
        <Hamburger onClick={handleOpen}>
          <span />
          <span />
          <span />
        </Hamburger>
      </Nav>
    </Mobile>
  );
};

export default Navbar;
