import { Link } from "react-router-dom";

import Wrapper from "../../../styles/welcome/LandingStyle.js";
import landing from "../../../imgs/landing.svg";

const Landing = () => {
  return (
    <Wrapper>
      <img src={landing} alt="TodoIV" className="landing--img" />
      <div className="landing--element-container">
        <p>TodoIV</p>
        <p>
          A <span>todo</span> list application for us procrastinators.
        </p>
        <div className="landing--btn-container">
          <Link to="/login" className="landing--btn landing--btn-login">
            Login
          </Link>
          <Link to="/register" className="landing--btn landing--btn-register">
            Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
