import React, { useState } from "react";

const ChildOne = ({ colorChange }) => {
  const [colorValue, setColorValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setColorValue(value);
    colorChange(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Color"
        value={colorValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default ChildOne;
