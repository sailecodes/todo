import { Form, Link } from "react-router-dom";

import Wrapper from "../../../styles/RegisterLoginStyle";
import FormLabeledInput from "../../helpers/FormLabeledInput";

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
          Still procrastinating? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
