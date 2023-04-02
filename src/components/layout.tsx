import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="wrapper" id="page_container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
