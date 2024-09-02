import React, { useState } from "react";
import LoginAuth from "./LoginAuth";
import AnimatedImage from "./AnimatesSlide";
import AuthSignup from "./AuthSignup";

const AuthWrapper = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleImageClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div className="container">
      <div className="red-background">
        <AuthSignup isMoved={isMoved} handleImageClick={handleImageClick} />
        <AnimatedImage isMoved={isMoved} handleImageClick={handleImageClick} />
      </div>
      <LoginAuth isMoved={isMoved} handleImageClick={handleImageClick} />
    </div>
  );
};

export default AuthWrapper;
