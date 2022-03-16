import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages";
import "./index.css";
import "./styles/base.scss";
import { Report } from "./pages/report";
// import your route components too

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<App />}></Route>
      <Route path="/report/:id" element={<Report />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Main;
