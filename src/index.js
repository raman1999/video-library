import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthenticationProvider, FilterProvider } from "./Context";
// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AuthenticationProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AuthenticationProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
