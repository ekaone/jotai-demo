import React from "react";
import { Provider } from "jotai";
import { Router, Link } from "@reach/router";
import { StoragePersistence, InputField } from "./components";

function App() {
  return (
    <Provider>
      <Router>
        <StoragePersistence path="/" />
        <InputField path="InputField" />
      </Router>
    </Provider>
  );
}

export default App;
