import React, { useState } from "react";
import { BtnSm } from "../styles/Button";

const UrlLinks = ({ url, shortenedUrl }) => {
  return (
    <div>
      <h3>{url}</h3>
      <div>
        <h3>{shortenedUrl}</h3>
        <BtnSm>Copy!</BtnSm>
      </div>
    </div>
  );
};

export default UrlLinks;
