import React from "react";
import BrandRecognitionIcon from "../img/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../img/icon-detailed-records.svg";
import CustomizableIcon from "../img/icon-fully-customizable.svg";
import {
  CardStyle,
  FlexDisplay,
  Line,
  CardAlignOne,
  CardAlignTwo,
} from "./Style";

const Card = () => {
  return (
    <div>
      <FlexDisplay>
        <CardStyle>
          <img src={BrandRecognitionIcon} alt="" />
          <h1>Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence ino your
            confidence.
          </p>
        </CardStyle>
        <CardAlignOne>
          <CardStyle>
            <img src={DetailedRecordsIcon} alt="" />
            <h1>Detailed Records</h1>
            <p>
              Gain insight into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </CardStyle>
        </CardAlignOne>
        <CardAlignTwo>
          <CardStyle>
            <img src={CustomizableIcon} alt="" />
            <h1>Fully Customizable</h1>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </CardStyle>
        </CardAlignTwo>
      </FlexDisplay>
      <Line></Line>
    </div>
  );
};

export default Card;
