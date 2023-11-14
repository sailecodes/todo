import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../../../styles/welcome/RegisterLoginStyle";
import axiosFetch from "../../../utilities/axiosFetch";
import WelcomeFormInput from "../../helpers/welcome/WelcomeFormInput";

const Register = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (registerData) => {
      return axiosFetch.post("/auth/register", registerData);
    },
    onSuccess: () => {
      navigate("/login");
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
        <WelcomeFormInput type="text" name="firstName" labelName="First Name" defaultValue="Elias" />
        <WelcomeFormInput type="text" name="lastName" labelName="Last Name" defaultValue="Roman" />
        <WelcomeFormInput type="email" name="email" labelName="Email" defaultValue="elias@gmail.com" />
        <WelcomeFormInput type="password" name="password" labelName="Password" defaultValue="0123456789" />
        <button className="auth--btn" type="submit">
          Register
        </button>
        <p className="auth--login-redirect">
          Already part of the productive team? <Link to="/login">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
