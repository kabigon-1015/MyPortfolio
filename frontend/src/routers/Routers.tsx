import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Experiences } from "./Experiences";
import { Contact } from "./Contact";

export const Routers = () => {
  return (
    <div className="pt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};
