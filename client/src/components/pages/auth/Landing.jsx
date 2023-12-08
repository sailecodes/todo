import { Link } from "react-router-dom";

import LandingWrapper from "../../../assets/wrappers/auth/LandingWrapper.js";

const Landing = () => {
  return (
    <LandingWrapper>
      <div className="landing--container">
        <p className="landing--title">TodoIV</p>
        <p className="landing--tag">
          A <span>todo</span> list application for us procrastinators.
        </p>
        <div className="landing--link-container">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
