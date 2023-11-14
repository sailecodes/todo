import Wrapper from "../../../styles/dashboard/FormInputStyle";

const FormInput = ({ type, name, labelName, defaultValue = "", isTodoModifyInput }) => {
  return (
    <Wrapper>
      <div className={`form-input--container ${name}`}>
        <label htmlFor={name}>
          {labelName ? labelName : name.charAt(0).toUpperCase() + name.slice(1)}
          {": "}
        </label>
        {type !== "datetime-local" && (
          <input type={type} id={name} name={name} defaultValue={defaultValue ? defaultValue : null} />
        )}
        {type === "datetime-local" && (
          <input
            type={type}
            id={name}
            name={name}
            defaultValue={defaultValue && type === "datetime-local" ? defaultValue : null}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default FormInput;
