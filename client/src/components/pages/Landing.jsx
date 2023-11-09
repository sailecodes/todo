import { Link } from "react-router-dom";
import Wrapper from "../../styles/LandingStyle.js";

const Landing = () => {
  return (
    <Wrapper>
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
