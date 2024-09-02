import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/herosection/Header";
import Footer from "./components/herosection/Footer";
import ProductCart from "./components/carts/ProductCart";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ProductCart />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
