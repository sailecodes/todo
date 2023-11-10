import { Form, Link } from "react-router-dom";

import Wrapper from "../../../styles/RegisterLoginStyle";
import FormLabeledInput from "../../helpers/welcome/FormLabeledInput";

const Register = () => {
  return (
    <Wrapper>
      <Form className="auth--form" method="post">
        <p className="auth--logo">TodoIV</p>
        <FormLabeledInput type="text" name="firstName" labelName="First Name" defaultValue="Elias" />
        <FormLabeledInput type="text" name="lastName" labelName="Last Name" defaultValue="Roman" />
        <FormLabeledInput type="email" name="email" labelName="Email" defaultValue="elias@gmail.com" />
        <FormLabeledInput type="password" name="password" labelName="Password" defaultValue="0123456789" />
        <button className="auth--btn" type="submit">
          Register
        </button>
        <p className="auth--login-redirect">
          Already part of the productive team? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
