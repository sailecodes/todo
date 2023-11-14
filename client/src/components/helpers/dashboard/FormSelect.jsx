import Wrapper from "../../../styles/dashboard/FormSelectStyle";

const FormSelect = ({ name, labelName, values, defaultValue = "" }) => {
  return (
    <Wrapper>
      <label className="form-select-label">
        {labelName ? labelName : name.charAt(0).toUpperCase() + name.slice(1)}
        {": "}
        <select name={name} defaultValue={defaultValue}>
          {values.map((value) => {
            return (
              <option key={value} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </option>
            );
          })}
        </select>
      </label>
    </Wrapper>
  );
};

export default FormSelect;
