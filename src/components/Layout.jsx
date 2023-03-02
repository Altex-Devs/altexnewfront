import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
      <div className="container mx-auto pt-[48px] px-[16px] max-w-[1232px]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;