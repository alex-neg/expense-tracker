import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-300">Tailwind is working</div>
    </>
  );
}

export default App;
