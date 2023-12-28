import React, { useState } from "react";
import ChildOne from "../ChildOne/ChildOne";

const Parent = () => {
  const [UIcolor, setUIColor] = useState("");

  const colorChange = (color) => {
    setUIColor(color);
  };
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid hsl(0, 0%, 90%",
        backgroundColor: `${UIcolor}`,
      }}
    >
      <ChildOne colorChange={colorChange} />
    </div>
  );
};

export default Parent;
