import AuthErrorsWrapper from "../../../assets/wrappers/auth/AuthErrorsWrapper";

const AuthErrors = ({ errorMsgs }) => {
  return <AuthErrorsWrapper>{errorMsgs && errorMsgs.map((msg) => <p key={msg}>*{msg}</p>)}</AuthErrorsWrapper>;
};

export default AuthErrors;
