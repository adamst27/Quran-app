import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Recitements from "./components/Recitements";
import Reciter from "./components/reciter";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quran" element={<Reciter />} />
        <Route path="/quran/:reciterId" element={<Recitements />} />
      </Routes>
    </div>
  );
}

export default App;
