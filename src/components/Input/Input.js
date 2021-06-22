import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { BtnBg } from "../styles/Button";
import { Shorten, Inp } from "./Style";
import UrlLinks from "../UrlLinks/UrlLinks";

const Input = () => {
  const [searchUrl, setSearchUrl] = useState("");
  const [url, setUrl] = useState({});
  const [urlLists, setUrlLists] = useLocalStorage("urls", []);

  // useEffect(() => {
  //   getUrl();
  // }, [query]);

  const getUrl = async (urlText) => {
    console.log(`${urlText} is available`);
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${urlText}/very/long/link.html`
    );
    const data = await response.json();
    setUrlLists([...urlLists, data.result]);
    console.log(urlLists);
  };

  return (
    <Inp>
      <Shorten>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getUrl(searchUrl);
          }}
        >
          <input
            placeholder="shorten a link here..."
            type="text"
            value={searchUrl}
            onChange={(e) => {
              setSearchUrl(e.target.value);
            }}
          />
          <BtnBg type="submit">Shorten it!</BtnBg>
        </form>
      </Shorten>
      {urlLists.map((urlList) => (
        <UrlLinks
          key={urlList}
          url={urlList.original_link}
          shortenedUrl={urlList.full_short_link}
        />
      ))}
    </Inp>
  );
};

export default Input;
