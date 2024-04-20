import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CityPage from "./components/CityPage";
import { useState } from "react";

function App() {
  const [pageItems, setPageItems] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage setPageItems={setPageItems}/>} />
        <Route path="CityPage" element={<CityPage pageItems={pageItems} setPageItems={setPageItems} />} />
      </Routes>
    </div>
  );
}

export default App;
