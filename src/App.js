import "./styles.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Users from "./Users";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;

//https://www.robinwieruch.de/react-router/
