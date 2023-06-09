import React from "react";
import { BrowserRouter } from "react-router-dom";

import { api } from "../src/services/api";
import { Routes } from "./routes/index";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
