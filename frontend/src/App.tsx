import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/Routers";
import { Nav } from "./components/layout/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-10">
        <Nav></Nav>
      </div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
