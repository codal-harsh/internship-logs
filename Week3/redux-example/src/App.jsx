import Red from "./pages/Red";
import Blue from "./pages/Blue";
import Green from "./pages/Green";
import ColorBox from "./pages/ColorBox";
import { useState } from "react";

function App() {
  console.log("app");

  return (
    <>
      <ColorBox />
      <br />
      <Red />

      <br />

      <Blue />

      <br />
      <Green />
    </>
  );
}

export default App;
