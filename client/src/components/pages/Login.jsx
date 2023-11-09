import styled from "styled-components";
import Wrapper from "../../styles/RegisterLoginStyle";
import FormLabeledInput from "../helpers/FormLabeledInput";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <Form className="auth--form" method="post">
        <p className="auth--logo">TodoIV</p>
        <FormLabeledInput type="email" name="email" labelName="Email" defaultValue="elias@gmail.com" />
        <FormLabeledInput type="password" name="password" labelName="Password" defaultValue="0123456789" />
        <button className="auth--btn" type="submit">
          Login
        </button>
        <p className="auth--login-redirect">
          Not yet a member? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
