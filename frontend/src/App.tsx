import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/Routers";
import { Nav } from "./components/layout/Nav";

function App() {
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
