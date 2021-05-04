import React from "react";
import { BtnBgRound } from "../styles/Button";
import { HeroSection } from "./Style";
import LandingImg from "../img/illustration-working.svg";

const LandingPage = () => {
  return (
    <HeroSection>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand recognition and get detailed insights on how links
          are performing.
        </p>
        <BtnBgRound href="#">Get Started</BtnBgRound>
      </div>
      <img src={LandingImg} alt="" />
    </HeroSection>
  );
};

export default LandingPage;
