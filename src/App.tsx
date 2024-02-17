import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home.page";
import Manage from "./page/manage.page";
import Layout from "./layout/layout";
import Stat from "./page/stat";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_SONGS } from "./redux/sagas/types";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="manage" element={<Manage />} />
          <Route path="stat" element={<Stat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
