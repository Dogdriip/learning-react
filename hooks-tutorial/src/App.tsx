import React, { useState } from "react";
import "./App.css";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);
  // return <Counter />;
  // return <Info />;
  return <Average />;
};

export default App;
