import { useState } from "react";
import { ThemeProvider } from "styled-components";
// import BackGround from "./components/BackGround";
import MainLayout from "./components/MainLayout";
import { Globalstyles } from "./theme/Globalstyles";
import { theme } from "./theme/Theme";

function App() {
  const [value, setValue] = useState("1");
  const OnhandleChange = (eve) => {
    setValue(eve.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles value={value} />
      {/* <Background value={value} /> */}
      <MainLayout value={value} OnhandleChange={OnhandleChange} />
    </ThemeProvider>
  );
}

export default App;
