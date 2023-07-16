import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import RecepieDetail from "./Receipes/RecepieDetail";
import Mainn from "./Mainn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recepie/:id" element={<RecepieDetail />} />
      </Routes>

      {/* <Mainn /> */}
    </div>
  );
}

export default App;
