import styled from "styled-components";

export const OutputGrid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  word-wrap: break-word;
  word-break: break-all;

  margin: 10px 10px;
  height: 90px;
  width: 340px;
  padding: 0.75rem;
  border-radius: 10px;
  font-size: 35px;
  padding: 1rem;
  background-color: ${(props) =>
    props.value === "1"
      ? props.theme.theme1.screen
      : props.value === "2"
      ? props.theme.theme2.screenbackground2
      : props.value === "3"
      ? props.theme.theme3.screenbackground3
      : props.theme.theme1.darkbluemainBackground};

  @media (max-width: 730px) {
    width: 340px;
    margin: 10px 20px;
  }
  @media (max-width: 375px) {
    margin: 0px 10px;
  }
`;
