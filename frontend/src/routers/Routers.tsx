import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Experiences } from "./Experiences";

export const Routers = () => {
  return (
    <div className="pt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />}></Route>
      </Routes>
    </div>
  );
};