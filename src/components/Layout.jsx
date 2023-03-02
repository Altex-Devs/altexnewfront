import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <>
      <div className="container mx-auto pt-[48px] px-[16px] max-w-[1232px]">
        <Navbar setLocale={props.setLocale} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;