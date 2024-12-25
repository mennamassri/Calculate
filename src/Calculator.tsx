import React, { useState } from "react";
import Result from "./Result";

const Calculator = () => {
  const [input, setInput] = useState<string>(""); 
  const [result, setResult] = useState<string | number>(""); 
 
  const handleClick = (value: string): void => {
    setInput((prev) => prev + value);
  };

  
  const isValidExpression = (input: string): boolean => {
    return /^[\d+\-*/(). ]+$/.test(input); 
  };
  
  const handleCalculate = (): void => {
    if (isValidExpression(input)) {
      try {
        setResult(Function(`return (${input})`)()); 
      } catch {
        setResult("error");
      }
    } 
  };
  
  
  const handleClear = (): void => {
    setInput("");
    setResult("");
  };

  return (
    <div style={{display:"flex" , justifyContent:"center",alignItems:"center"}}>
    <div style={{ textAlign: "center", padding: "20px" }}>

      <Result value={result || input || "0"} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "10px",
          justifyContent: "center",
          margin: "10px auto",
        }}
      >
       
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={{
              fontSize: "20px",
              padding: "10px",
              backgroundColor: "#ff004c",
              border: "none",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            {num}
          </button>
        ))}

        {/* العمليات */}
        <button
          onClick={() => handleClick("+")}
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "#ffa500",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          +
        </button>
        <button
          onClick={() => handleClick("-")}
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "#ffa500",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          -
        </button>
        <button
          onClick={handleCalculate}
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "#4caf50",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          =
        </button>
        <button
          onClick={handleClear}
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "#000",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          C
        </button>
      </div>
    </div></div>
  );
};

export default Calculator;
