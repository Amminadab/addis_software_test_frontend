import { Outlet } from "react-router-dom";
import Header from "../component/header";

import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
