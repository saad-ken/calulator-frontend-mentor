import React from "react";
import "./styles/Theme.css";
import { Flex, FlexSpan, TitleFlex } from "./styles/Title.styled";

const Title = ({ value, OnhandleChange }) => {
  return (
    <Flex value={value}>
      <TitleFlex>
        <h1>calc</h1>
        <p>Theme</p>
        <div>
          <FlexSpan range={value}>
            <input type="range" min={1} max={3} onChange={OnhandleChange} />
          </FlexSpan>
        </div>
      </TitleFlex>
    </Flex>
  );
};

export default Title;
