import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../../../styles/welcome/RegisterLoginStyle";
import axiosFetch from "../../../utilities/axiosFetch";
import WelcomeFormInput from "../../helpers/welcome/WelcomeFormInput";

const Login = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (loginData) => {
      return axiosFetch.post("/auth/login", loginData);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  return (
    <Wrapper>
      <form method="post" onSubmit={handleSubmit}>
        <p className="auth--logo">TodoIV</p>
        <WelcomeFormInput type="email" name="email" labelName="Email" defaultValue="elias@gmail.com" />
        <WelcomeFormInput type="password" name="password" labelName="Password" defaultValue="0123456789" />
        <button type="submit">Login</button>
        <p className="auth--login-redirect">
          Still procrastinating? <Link to="/register">Register</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
