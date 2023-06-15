import React, { useState } from "react";
import "./counter.css";

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="first">
        <p className="countPara">COUNTER</p>
        <h3 className="count">
          <span className="vvv">Count : </span>
          {count}
        </h3>
        <button onClick={() => setCount(count + 1)}>incriment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </>
  );
}

export default Counter;
