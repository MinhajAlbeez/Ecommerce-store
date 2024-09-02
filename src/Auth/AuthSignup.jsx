import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import LogoImage from "../assets/logoimg.png";


const AuthSignup = ({ handleImageClick }) => {
  useEffect(() => {
    console.log("handleImageClick", handleImageClick);
  }, [handleImageClick]);

  return (
    <Grid container justifyContent="center">
      <div className="signup">
        <div className="logo">
          <img src={LogoImage} alt="logpngg" height={200} width={200} />
        </div>
        <h2 className="welcome">Welcome!</h2>
        <form className="form">
          <input name="Username" type="text" placeholder="Enter Your Username" />
          <input name="Email" type="email" placeholder="Enter Your Email" />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <input
                name="Password"
                type="password"
                placeholder="Enter Your Password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                name="Confirm Password"
                type="password"
                placeholder="Confirm Your Password"
              />
            </Grid>
          </Grid>

          <p>
            Have an account?{" "}
            <span className="register-link" onClick={handleImageClick}>
              Login Now
            </span>
          </p>
          <button className="button" type="submit" onClick={handleImageClick}>
            Sign Up
          </button>
        </form>
      </div>
    </Grid>
  );
};

export default AuthSignup;
