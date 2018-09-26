import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { setUrl } from "./globa";
import { VehicleProvider } from "./context/VehicleContext";

setUrl();

ReactDOM.render(
  <VehicleProvider>
    <App />
  </VehicleProvider>,
  document.getElementById("root")
);

registerServiceWorker();
