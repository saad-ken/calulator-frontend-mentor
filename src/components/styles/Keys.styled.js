import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    margin: 8px 10px;
  }
`;

export const Calc = styled.div`
  border-radius: 10px;
  width: 370px;
  background-color: ${(props) =>
    props.range === "1"
      ? props.theme.theme1.keypadBackground1
      : props.range === "2"
      ? props.theme.theme2.keypadbackground2
      : props.range === "3"
      ? props.theme.theme3.keypadbackground3
      : props.theme.theme1.darkbluemainBackground};

  @media (max-width: 730px) {
    margin: 0px 20px;
  }
  @media (max-width: 375px) {
    margin: 0px 10px;
    padding: 5px;
  }
`;

export const CalcButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  grid-gap: 1rem;
`;

export const Buttons = styled.button`
  cursor: pointer;
  text-align: center;
  outline: 0;
  border: 0;
  font-family: inherit;
  transition: 1s ease-in-out;


  padding: 13px;
  border-radius: 10px;
  font-size: 1.2rem;

  background-color: ${(props) =>
    props.range === "1"
      ? "white"
      : props.range === "2"
      ? props.theme.theme2.grayishyellowkeybackground
      : props.range === "3"
      ? props.theme.theme3.violetkeybackground
      : props.theme.theme1.darkbluemainBackground};


    color:${(props) =>
      props.range === "1"
        ? props.theme.theme1.darkblue
        : props.range === "2"
        ? "black"
        : props.range === "3"
        ? "inherit"
        : "white"};
  box-shadow: 0px 4px ${(props) =>
    props.range === "1"
      ? props.theme.theme1.orangekeyshadow
      : props.range === "2"
      ? props.theme.theme2.grayishorangekeyshadow
      : props.range === "3"
      ? props.theme.theme3.magentakeyshadow
      : props.theme.theme1.darkbluemainBackground};
 

  :nth-child(4) {
  box-shadow: 0px 4px ${(props) =>
    props.range === "1"
      ? props.theme.theme1.darkblue
      : props.range === "2"
      ? props.theme.theme2.cyankeyshadow
      : props.range === "3"
      ? props.theme.theme3.magentakeyshadow
      : props.theme.theme1.darkbluemainBackground};
  }
  :nth-child(4) {
    
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.keybackground
        : props.range === "2"
        ? props.theme.theme2.cyankeybackground
        : props.range === "3"
        ? props.theme.theme3.Darkvioletkeybackground
        : props.theme.theme1.darkbluemainBackground};
      color: ${(props) =>
        props.range === "1"
          ? "white"
          : props.range === "2"
          ? "white"
          : props.range === "3"
          ? "white"
          : "white"}};
  }

  :nth-child(17) {
    box-shadow: 0px 4px ${(props) =>
      props.range === "1"
        ? props.theme.theme1.darkblue
        : props.range === "2"
        ? props.theme.theme2.cyankeyshadow
        : props.range === "3"
        ? props.theme.theme3.magentakeyshadow
        : props.theme.theme1.darkbluemainBackground};
  }
  :nth-child(17) {
    grid-column: span 2;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.keybackground
        : props.range === "2"
        ? props.theme.theme2.cyankeybackground
        : props.range === "3"
        ? props.theme.theme3.Darkvioletkeybackground
        : props.theme.theme1.darkbluemainBackground};
      color: ${(props) =>
        props.range === "1"
          ? "white"
          : props.range === "2"
          ? "white"
          : props.range === "3"
          ? "white"
          : "white"}};
  };

  :nth-child(18) {

    box-shadow:0px 4px ${(props) =>
      props.range === "1"
        ? props.theme.theme1.redkeyshadow
        : props.range === "2"
        ? props.theme.theme2.orangekeyshadow
        : props.range === "3"
        ? props.theme.theme3.cyankeyshadow
        : props.theme.theme1.darkbluemainBackground};

  }
  :nth-child(18) {
    grid-column: span 2;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.redkeybackground
        : props.range === "2"
        ? props.theme.theme2.orangekeybackground
        : props.range === "3"
        ? props.theme.theme3.cyankeybackground
        : props.theme.theme1.darkbluemainBackground};
      color: ${(props) =>
        props.range === "1"
          ? "white"
          : props.range === "2"
          ? "white"
          : props.range === "3"
          ? "black"
          : "white"}};
  };
`;
