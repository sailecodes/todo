const FormLabeledInput = ({ type, name, labelName, defaultValue }) => {
  return (
    <>
      <label className="auth--input-label" htmlFor={name}>
        {labelName || name}
      </label>
      <input className="auth--input" type={type} id={name} name={name} defaultValue={defaultValue} />
    </>
  );
};

export default FormLabeledInput;
