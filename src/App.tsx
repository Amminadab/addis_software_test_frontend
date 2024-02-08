import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="management" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
