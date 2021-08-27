import React, { useState, useMemo } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const m = useMemo(
    function mulMemo() {
      console.log("render");
      return count * 2;
    },
    [count]
  );

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h1>{m}</h1>
      <button onClick={() => setCount(count + 1)}>incCount</button>
      <button onClick={() => setCount2(count2 - 1)}>decCount</button>
    </div>
  );
}
