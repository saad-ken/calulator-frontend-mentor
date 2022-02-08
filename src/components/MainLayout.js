/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
/* eslint-disable default-case */
import React, { useState } from "react";
import Keypad from "./Keypad";
import Output from "./Output";
import { Calc, CalcButtons, Container } from "./styles/Keys.styled";
import { Flex } from "./styles/MainLayout.styled";
import Title from "./Title";

const MainLayout = ({ value, OnhandleChange }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handelclick = (eve) => {
    const value = eve.target.value;
    setQuestion(question + value);
  };

  const Equal = () => {
    try {
      var ans = setAnswer(eval(question).toString());
      setQuestion("");
    } catch (err) {
      setQuestion("");
      setAnswer("Syntax Error");
    }
  };

  const cases = (eve) => {
    const value = eve.target.value;

    switch (value) {
      case "RESET": {
        setQuestion("");
        setAnswer("");
        break;
      }
      case "DEL": {
        setQuestion(question.substring(0, question.length - 1));
      }
    }
  };

  return (
    <Flex>
      <Title value={value} OnhandleChange={OnhandleChange} />
      <Container>
        <Output ans={answer} ques={question} value={value} />
      </Container>
      <Container>
        <Calc range={value}>
          <CalcButtons>
            <Keypad lable={"7"} click={handelclick} range={value} />
            <Keypad lable={"8"} click={handelclick} range={value} />
            <Keypad lable={"9"} click={handelclick} range={value} />
            <Keypad lable={"DEL"} click={cases} range={value} />

            <Keypad lable={"4"} click={handelclick} range={value} />
            <Keypad lable={"5"} click={handelclick} range={value} />
            <Keypad lable={"6"} click={handelclick} range={value} />
            <Keypad lable={"+"} click={handelclick} range={value} />

            <Keypad lable={"1"} click={handelclick} range={value} />
            <Keypad lable={"2"} click={handelclick} range={value} />
            <Keypad lable={"3"} click={handelclick} range={value} />
            <Keypad lable={"-"} click={handelclick} range={value} />

            <Keypad lable={"."} click={handelclick} range={value} />
            <Keypad lable={"0"} click={handelclick} range={value} />
            <Keypad lable={"/"} click={handelclick} range={value} />
            <Keypad lable={"*"} click={handelclick} range={value} />

            <Keypad lable={"RESET"} click={cases} range={value} />
            <Keypad lable={"="} click={Equal} range={value} />
          </CalcButtons>
        </Calc>
      </Container>
    </Flex>
  );
};

export default MainLayout;
