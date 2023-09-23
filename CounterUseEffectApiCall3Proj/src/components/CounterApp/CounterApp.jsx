import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [counterValue, setCounterValue] = useState(0);
  const IncrementHandler = () => setCounterValue(counterValue + 1);
  const DecrementHandler = () => setCounterValue(counterValue - 1);
  return (
    <div className="container1">
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter__output">{counterValue}</span>
        <div className="btn__container">
          <button className="control__btn ecrer" onClick={IncrementHandler}>
            Increment
          </button>
          <button className="control__btn decr" onClick={DecrementHandler}>
            Decrement
          </button>
          <button className="reset" onClick={() => setCounterValue(0)}>
            Reset
          </button>{" "}
          {/* IN this we used incline callback */}
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
