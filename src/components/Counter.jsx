import React from "react";

const Counter = ({ counter, click, reset }) => {
  return (
    <div>
      <p> Кнопка нажата {counter} раз </p>

      <button onClick={click}>click me</button>
      <button onClick={reset}>сбросить</button>
    </div>
  );
};

export default Counter;
