import React from "react";
import { BtnBg } from "../styles/Button";
import { Shorten } from "./Style";

const Input = () => {
  return (
    <Shorten>
      <input placeholder="shorten a link here..." type="text" />
      <BtnBg href="#">Shorten it!</BtnBg>
    </Shorten>
  );
};

export default Input;
