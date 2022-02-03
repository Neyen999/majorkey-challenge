import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./App/context/Context";
import App from "./App";

import "./theme.css";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root"),
);
