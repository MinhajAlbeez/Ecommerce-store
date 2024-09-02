import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Login from "../assets/login.jpg";
// import AnimatedImage from "./AnimatedImage";


const AnimatedImage = ({ isMoved, handleImageClick }) => {
  return (
    <motion.div
      className="image-container"
      animate={{ x: isMoved ? "100%" : "0%" }}
      transition={{ duration: 0.1 }}
      // onClick={handleImageClick}
    >
      <img src={Login} alt="Login Image" className="image" />
    </motion.div>
  );
};

AnimatedImage.propTypes = {
  isMoved: PropTypes.bool.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default AnimatedImage;
