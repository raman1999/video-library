import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthenticationProvider,
  FilterProvider,
  UserDataProvider,
} from "./Context";
// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AuthenticationProvider>
        <UserDataProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserDataProvider>
      </AuthenticationProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
