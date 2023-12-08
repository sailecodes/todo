import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import axiosFetch from "../../../utils/axiosFetch";
import SubmitBtn from "../../custom/general/SubmitBtn";
import AuthInput from "../../custom/auth/AuthInput";
import AuthErrors from "../../custom/auth/AuthErrors";
import AuthWrapper from "../../../assets/wrappers/auth/AuthWrapper";

const Register = () => {
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [isFSIconVisible, setIsFSIconVisible] = useState(false);
  const [isLSIconVisible, setIsLSIconVisible] = useState(false);
  const [isEmailIconVisible, setIsEmailIconVisible] = useState(false);
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState(false);
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: (data) => {
      return axiosFetch.post("/auth/register", data);
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      const msgsUnsliced = error?.response?.data?.msg;
      const msgs = msgsUnsliced.split(",");

      setErrorMsgs(msgs);

      for (let i = 0; i < msgs.length; i++) {
        if (msgs[i].includes("First name")) setIsFSIconVisible(true);
        else if (msgs[i].includes("Last name")) setIsLSIconVisible(true);
        else if (msgs[i].includes("Email")) setIsEmailIconVisible(true);
        else if (msgs[i].includes("Password")) setIsPasswordIconVisible(true);
      }
    },
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    register.mutate(data);
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleRegister}>
        <p className="auth--logo">TodoIV</p>
        <AuthInput
          type="text"
          name="firstName"
          placeholder="First name"
          setErrorMsgs={setErrorMsgs}
          isIconVisible={isFSIconVisible}
          setIsIconVisible={setIsFSIconVisible}
        />
        <AuthInput
          type="text"
          name="lastName"
          placeholder="Last name"
          setErrorMsgs={setErrorMsgs}
          isIconVisible={isLSIconVisible}
          setIsIconVisible={setIsLSIconVisible}
        />
        <AuthInput
          type="email"
          name="email"
          placeholder="Email"
          setErrorMsgs={setErrorMsgs}
          isIconVisible={isEmailIconVisible}
          setIsIconVisible={setIsEmailIconVisible}
        />
        <AuthInput
          type="password"
          name="password"
          placeholder="Password"
          setErrorMsgs={setErrorMsgs}
          isIconVisible={isPasswordIconVisible}
          setIsIconVisible={setIsPasswordIconVisible}
        />
        <SubmitBtn
          isPending={register.isPending}
          text="Register"
        />
        <p className="auth--redirect">
          Already part of the productive team? <Link to="/login">Login</Link>
        </p>
      </form>
      <AuthErrors errorMsgs={errorMsgs} />
    </AuthWrapper>
  );
};

export default Register;
