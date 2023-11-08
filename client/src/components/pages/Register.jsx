import { Form, Link } from "react-router-dom";

import Wrapper from "../../styles/Register";
import FormLabeledInput from "../helpers/FormLabeledInput";

const Register = () => {
  return (
    <Wrapper>
      <Form className="register--form" method="post">
        <p className="register--logo">TodoIV</p>
        <FormLabeledInput type="text" name="firstName" labelName="First Name" defaultValue="" />
        <FormLabeledInput type="text" name="lastName" labelName="Last Name" defaultValue="" />
        <FormLabeledInput type="email" name="email" labelName="Email" defaultValue="" />
        <FormLabeledInput type="password" name="password" labelName="Password" defaultValue="" />
        <button className="register--btn" type="submit">
          Register
        </button>
        <p className="register--login-redirect">
          Already a member? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
