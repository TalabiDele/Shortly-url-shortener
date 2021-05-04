import React from "react";
import Card from "../Cards/Card";
import { TextCenter, Paragraph, Header } from "./Style";

const Stat = () => {
  return (
    <TextCenter>
      <Header>Advanced Statistics</Header>
      <Paragraph>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </Paragraph>
      <Card />
    </TextCenter>
  );
};

export default Stat;
