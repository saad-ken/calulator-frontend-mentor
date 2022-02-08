import React from "react";
import { OutputGrid } from "./styles/Output.styled";

const Output = ({ ans, ques, value }) => {
  return (
    <OutputGrid value={value}>
      <div className="input">
        {ques ? `(${ques})` : ""}
        <span className="result">{ans ? `${ans}` : "0"}</span>
      </div>
    </OutputGrid>
  );
};

export default Output;
