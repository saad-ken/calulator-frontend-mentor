import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
  transition: 1s ease-in-out;


    font-family: 'Spartan', sans-serif;
    background-color: ${(props) =>
      props.value === "1"
        ? props.theme.theme1.darkbluemainBackground
        : props.value === "2"
        ? props.theme.theme2.Lightgraymainbackground
        : props.value === "3"
        ? props.theme.theme3.darkvioletmainbackground
        : props.theme.theme1.darkbluemainBackground};

    color: ${(props) =>
      props.value === "1"
        ? "white"
        : props.value === "2"
        ? props.theme.theme2.Text
        : props.value === "3"
        ? props.theme.theme3.Lightyellow
        : props.theme.theme1.Whitetext1};
    // condition1 ? value1 : condition2 ? value2: condition3 ? value3 : value4;
}
`;
