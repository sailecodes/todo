import { Link } from "react-router-dom";

import Wrapper from "../../../styles/LandingStyle.js";
import landing from "../../../imgs/landing.svg";

const Landing = () => {
  return (
    <Wrapper>
      <img src={landing} alt="TodoIV" className="landing--img" />
      <div className="landing--element-container">
        <p>TodoIV</p>
        <p>A todo list application for us procrastinators.</p>
        <div className="landing--btn-container">
          <Link to="/login" className="landing--btn">
            Login
          </Link>
          <Link to="/register" className="landing--btn">
            Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
