import React, { useState, useEffect } from "react";
import axios from "axios";
import { BtnBg } from "../styles/Button";
import { Shorten } from "./Style";
import UrlLinks from "../UrlLinks/UrlLinks";

const Input = () => {
  const [searchUrl, setSearchUrl] = useState("");
  const [url, setUrl] = useState({});
  const [query, setQuery] = useState("");
  const [urlLists, setUrlLists] = useState([]);

  useEffect(() => {
    getUrl();
  }, [query]);

  const getUrl = async () => {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${query}/very/long/link.html`
    );
    setUrl(response.data.result);
  };

  const getQueryUrl = (e) => {
    e.preventDefault();
    setQuery(searchUrl);
    setUrlLists([url]);
  };

  return (
    <div>
      <Shorten>
        <input
          placeholder="shorten a link here..."
          type="text"
          value={searchUrl}
          onChange={(e) => setSearchUrl(e.target.value)}
        />
        <BtnBg href="#" onClick={getQueryUrl}>
          Shorten it!
        </BtnBg>
      </Shorten>
      {urlLists.map((urlList) => (
        <UrlLinks
          key={urlList.code}
          url={urlList.original_link}
          shortenedUrl={urlList.full_short_link}
        />
      ))}
    </div>
  );
};

export default Input;
