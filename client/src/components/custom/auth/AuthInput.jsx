import AuthInputWrapper from "../../../assets/wrappers/auth/AuthInputWrapper";
import ErrorIcon from "../icons/ErrorIcon";

const AuthInput = ({ type, name, placeholder, setErrorMsgs, isIconVisible, setIsIconVisible }) => {
  return (
    <AuthInputWrapper>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={() => {
          setErrorMsgs(null);
          setIsIconVisible(false);
        }}
      />
      {isIconVisible && <ErrorIcon stroke="var(--color-error)" />}
    </AuthInputWrapper>
  );
};

export default AuthInput;
