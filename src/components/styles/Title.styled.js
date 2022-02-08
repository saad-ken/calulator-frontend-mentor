import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28%;
  p {
    text-transform: uppercase;
    position: relative;

    right: 20px;
  }
  @media (max-width: 730px) {
    width: 360px;
    padding: 5px;
    margin: 0 20px;
    /* background-color: red; */
    h1 {
      margin-right: 20px;
    }
    p {
      position: relative;
      right: 30px;
    }
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 9px;
    margin: 10px;
    h1 {
      position: relative;
      top: -5px;
    }
    p {
      position: relative;
      transform: translateX(40%);
    }
  }
`;

export const FlexSpan = styled.div`


  input[type="range"] {
    position: absolute;
    height: 18px;
    -webkit-appearance: none;
    background: transparent;
    margin: 10px 0;
    width: 60px;
    top: 20px;
    left: 280px;
  }

  @media (max-width: 375px) {
    input[type="range"] {
    position: absolute;
     -webkit-appearance: none;
      background: transparent;
      width: 60px;
      top:30px;
      left: 280px;
    }
  }


  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    cursor: pointer;
    /* animate: 0.2s; */
    box-shadow: 0px 0px 0px #000000;
    border-radius: 20px;
    border: 0px solid #010101;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.keypadBackground1
        : props.range === "2"
        ? props.theme.theme2.togglebackground2
        : props.range === "3"
        ? props.theme.theme3.togglebackground3
        : props.theme.theme1.darkbluemainBackground}};
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000031;
    border: 0px solid #1e0202;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background: #ff7e1c;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 4px;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.toggle
        : props.range === "2"
        ? props.theme.theme2.Orangetoggle
        : props.range === "3"
        ? props.theme.theme3.toggle
        : props.theme.theme1.darkbluemainBackground}
  }


  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 20px;
    cursor: pointer;
    /* animate: 0.2s; */
    border-radius: 20px;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.keypadBackground1
        : props.range === "2"
        ? props.theme.theme2.togglebackground2
        : props.range === "3"
        ? props.theme.theme3.togglebackground3
        : props.theme.theme1.darkbluemainBackground}}
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000031;
    border: 0px solid #1e0202;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    cursor: pointer;
    background-color: ${(props) =>
      props.range === "1"
        ? props.theme.theme1.toggle
        : props.range === "2"
        ? props.theme.theme2.Orangetoggle
        : props.range === "3"
        ? props.theme.theme3.toggle
        : props.theme.theme1.darkbluemainBackground}
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 30px;
    cursor: pointer;
    /* animate: 0.2s; */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  

  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    cursor: pointer;
  }

`;
