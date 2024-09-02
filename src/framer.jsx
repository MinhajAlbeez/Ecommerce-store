import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import Login from "./assets/login.jpg"; // Adjust the path to your image file
import { motion } from "framer-motion";

function Framer() {
  const [isMoved, setIsMoved] = useState(false);

  const handleImageClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div className="container">
      <div className="background"></div>
      <motion.div
        className="left"
        animate={{ x: isMoved ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
        onClick={handleImageClick}
      >
        {/* <img src={Login} alt="Description" className="image"/> */}
        <img src={Login} alt="Description" className="image" />
      </motion.div>

      <div className="right">

      </div>
    </div>
  );
}

export default Framer;
