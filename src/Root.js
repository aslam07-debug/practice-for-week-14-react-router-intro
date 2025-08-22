import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
