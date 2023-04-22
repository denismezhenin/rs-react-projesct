import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="wrapper main" id="page_container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
