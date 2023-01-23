import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default DefaultLayout;
