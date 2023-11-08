const FormLabeledInput = ({ type, name, labelName, defaultValue }) => {
  return (
    <>
      <label className="register--input-label" htmlFor={name}>
        {labelName || name}
      </label>
      <input className="register--input" type={type} id={name} name={name} defaultValue={defaultValue} />
    </>
  );
};

export default FormLabeledInput;
