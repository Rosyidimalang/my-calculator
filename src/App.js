import React, { useState } from "react";
import "./App.css";

const btns = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  ".",
  "0",
  "=",
  "/",
];

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
      <input className="text-9xl font-bold" type="text" value={result} />
      <div className="grid grid-cols-3">
        {btns.map((btn, idx) => (
          <button
            className="border border-yellow-400 rounded h-20"
            onClick={() => handleClick(btn)}
          >
            {btn === "*" ? "x" : btn === "/" ? "÷" : btn}
          </button>
        ))}
      </div>

      <div className="font-bold text-7xl text-yellow-400">text</div>

      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" value={result} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("1")}>1</button>
            </td>
            <td>
              <button onClick={() => handleClick("2")}>2</button>
            </td>
            <td>
              <button onClick={() => handleClick("3")}>3</button>
            </td>
            <td>
              <button onClick={() => handleClick("+")}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("4")}>4</button>
            </td>
            <td>
              <button onClick={() => handleClick("5")}>5</button>
            </td>
            <td>
              <button onClick={() => handleClick("6")}>6</button>
            </td>
            <td>
              <button onClick={() => handleClick("-")}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("7")}>7</button>
            </td>
            <td>
              <button onClick={() => handleClick("8")}>8</button>
            </td>
            <td>
              <button onClick={() => handleClick("9")}>9</button>
            </td>
            <td>
              <button onClick={() => handleClick("*")}>x</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick(".")}>.</button>
            </td>
            <td>
              <button onClick={() => handleClick("0")}>0</button>
            </td>
            <td>
              <button onClick={() => handleClick("=")}>=</button>
            </td>
            <td>
              <button onClick={() => handleClick("/")}>÷</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
