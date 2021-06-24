import React, { useState } from "react";
import { BtnPrimary } from "../styles/Button";
import { UrlList, MainUrl, ShortenedUrl } from "./Style";
import copy from "copy-to-clipboard";

const UrlLinks = ({ url, shortenedUrl }) => {
  // const [copyText, setCopyText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copy(shortenedUrl);
    setIsCopied(!isCopied);
  };

  return (
    <UrlList>
      <MainUrl>{url}</MainUrl>
      <div>
        <ShortenedUrl>{shortenedUrl}</ShortenedUrl>
        <BtnPrimary onClick={handleCopy} isCopied={isCopied}>
          {isCopied ? "Copied!" : "Copy!"}
        </BtnPrimary>
      </div>
    </UrlList>
  );
};

export default UrlLinks;
