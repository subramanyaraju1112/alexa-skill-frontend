import { useState } from "react";
import "./App.css";
import ChildOne from "./components/ChildOne/ChildOne";
import ChildTwo from "./components/ChildTwo/ChildTwo";
import Parent from "./components/Parent/Parent";
import Card from "./components/Card/Card";

function App() {
  const [change, setChange] = useState("");
  return (
    <>
      {/* <Parent />
      <ChildOne change={change} setChange={setChange} />
      <ChildTwo change={change} setChange={setChange} /> */}
      <Card />
    </>
  );
}

export default App;
