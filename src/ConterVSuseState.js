import React, { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const ref = useRef(1);

  const incCount = () => setCount((c) => c + 1);

  const incRef = () => {
    ref.current++;
    console.log(`ref.current is ${ref.current++}`);
  };

  console.log("render buttons!");
  return (
    <div className="App">
      <button onClick={incCount}>count: {count}</button>
      <hr />
      <button onClick={incRef}>ref.current: {ref.current}</button>
    </div>
  );
}

export default function myApp() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
