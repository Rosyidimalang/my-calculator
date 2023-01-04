import React, { useState } from "react";
import "./App.css";

const btns1 = ["1", "2", "3", "+"];
const btns2 = ["4", "5", "6", "-"];
const btns3 = ["7", "8", "9", "*"];
const btns4 = [".", "0", "=", "/"];

function App() {
  const [result, setResult] = useState("");

  const handleClick = (button) => {
    if (button === "=") {
      calculate();
      return;
    }
    setResult(result + button);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <input
          className="text-9xl font-bold bg-slate-500 w-[48rem] px-7 "
          type="text"
          value={result}
          onChange={handleClick}
        />
      </div>

      <div className=" flex md:flex justify-center">
        {btns1.map((btn, index) => (
          <button
            className="border border-slate-100 w-1/4 md:w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns2.map((btn, index) => (
          <button
            className="border border-slate-100 w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns3.map((btn, index) => (
          <button
            className="border border-slate-100 w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn === "*" ? "x" : btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns4.map((btn, index) => (
          <button
            className="border border-slate-100 w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn === "/" ? "÷" : btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
