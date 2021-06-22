import React, { useState } from "react";
import { BtnSm } from "../styles/Button";
import { UrlList, MainUrl, ShortenedUrl } from "./Style";
import copy from "copy-to-clipboard";

const UrlLinks = ({ url, shortenedUrl }) => {
  // const [copyText, setCopyText] = useState("");

  const handleCopy = () => {
    copy(shortenedUrl);
    alert("Shortened Url Copied");
  };

  return (
    <UrlList>
      <MainUrl>{url}</MainUrl>
      <div>
        <ShortenedUrl>{shortenedUrl}</ShortenedUrl>
        <BtnSm onClick={handleCopy}>Copy!</BtnSm>
      </div>
    </UrlList>
  );
};

export default UrlLinks;
