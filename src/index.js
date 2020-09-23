/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/core";
import Datepicker from "./components/Datepicker";

import "./styles.css";

function App() {
  return <Datepicker />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
