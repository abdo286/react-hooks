import * as React from "react";
import { useState } from "react";
import useThrottle from "./useThrottle";

export default function App() {
  const [count, setCount] = useState(0);
  useThrottle(() => console.log("5"), 500, [count]);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Update Counter
      </button>
      <p>{count}</p>
    </div>
  );
}
