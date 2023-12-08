import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import axiosFetch from "../../../utils/axiosFetch";
import AuthWrapper from "../../../assets/wrappers/auth/AuthWrapper";
import AuthInput from "../../custom/auth/AuthInput";
import SubmitBtn from "../../custom/general/SubmitBtn";
import AuthErrors from "../../custom/auth/AuthErrors";

const Login = () => {
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [isEmailIconVisible, setIsEmailIconVisible] = useState(false);
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState(false);
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: (data) => {
      return axiosFetch.post("/auth/login", data);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      const msgsUnsliced = error?.response?.data?.msg;
      const msgs = msgsUnsliced.split(",");

      setErrorMsgs(msgs);

      for (let i = 0; i < msgs.length; i++) {
        if (msgs[i].includes("Email")) setIsEmailIconVisible(true);
        else if (msgs[i].includes("Password")) setIsPasswordIconVisible(true);
      }
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    login.mutate(data);
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleLogin}>
        <p className="auth--logo">TodoIV</p>
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
          isPending={login.isPending}
          text="Login"
        />
        <p className="auth--redirect">
          Still procrastinating? <Link to="/register">Register</Link>
        </p>
      </form>
      <AuthErrors errorMsgs={errorMsgs} />
    </AuthWrapper>
  );
};
export default Login;
