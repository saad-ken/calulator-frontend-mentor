import React from "react";
import { Buttons } from "./styles/Keys.styled";

const Keypad = ({ lable, click, range }) => {
  return (
    <Buttons range={range} type="button" value={lable} onClick={click}>
      {lable}
    </Buttons>
  );
};

export default Keypad;
