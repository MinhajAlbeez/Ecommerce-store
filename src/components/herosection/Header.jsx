import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you're using React Router for navigation
import PromoCode from "./PromoCode";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import HeroSection from "./HeroSection";
import CustomNavbar from "./Navbar";

const Header = () => {
  return (
    <>
      <PromoCode />
      <nav className="navbar">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">
                Products <DownOutlined />
              </a>
            </li>
            <li>
              <a href="#contact">
                Features <DownOutlined />
              </a>
            </li>
          </ul>
        </div>
        <ul className="cart-icon">
          <oi>
            <ShoppingCartOutlined />
          </oi>
        </ul>
      </nav>
      {/* <CustomNavbar/> */}
      <hr />
      <HeroSection/>
    </>
  );
};

export default Header;
