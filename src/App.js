import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  let [counter, setCounter] = useState(0);
  const click = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div>
      <Counter counter={counter} click={click} reset={reset} />
    </div>
  );
};
export default App;
