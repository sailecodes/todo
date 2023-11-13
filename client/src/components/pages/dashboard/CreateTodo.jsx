import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosFetch from "../../../utilities/axiosFetch";
import Error from "../Error";
import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS, TODO_MODEL_TYPE } from "../../../../../server/utils/constants";

import styled from "styled-components";
import CardHeading from "../../helpers/dashboard/CardHeading";

const I = styled.div`
  .form-input--container {
    display: flex;
    flex-direction: column;
  }

  input[name="description"] {
    width: 50rem;
  }
`;

const FormInput = ({ type, name, labelName, isTodoModifyInput }) => {
  return (
    <I>
      <div className={`form-input--container ${name}`}>
        <label htmlFor={name}>
          {labelName ? labelName : name.charAt(0).toUpperCase() + name.slice(1)}
          {": "}
        </label>
        <input type={type} id={name} name={name} />
      </div>
    </I>
  );
};

const S = styled.div`
  .form-select-label {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const FormSelect = ({ name, labelName, values }) => {
  return (
    <S>
      <label className="form-select-label">
        {labelName ? labelName : name.charAt(0).toUpperCase() + name.slice(1)}
        {": "}
        <select name={name}>
          {values.map((value) => {
            return (
              <option key={value} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </option>
            );
          })}
        </select>
      </label>
    </S>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 12px;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  form label {
    font-size: 2.5rem;
  }

  input {
    height: 2.5rem;
    width: 30rem;

    font-size: 1.5rem;

    padding-left: 0.5rem;
    border: 1px solid var(--color-black);
    border-radius: 5px;
  }

  .form-select--container {
    display: flex;
    gap: 5rem;
  }

  button {
    width: 10rem;
    height: 5rem;

    font-size: 2rem;

    border: 1px solid var(--color-black);
    border-radius: 8px;
  }
`;

const CreateTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (createData) => {
      console.log(createData);
      return axiosFetch.post("/todos", createData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/dashboard/todos/all"); // TODO: Should the user be redirected even?
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  if (isError) return <Error />;

  return (
    <Wrapper>
      <CardHeading cardTitle="Create" isModifiable={false} />
      <form onSubmit={handleSubmit}>
        <FormInput type="text" name="title" isTodoModifyInput={true} />
        <FormInput type="text" name="description" isTodoModifyInput={true} />
        <div className="form-select--container">
          <FormSelect name="type" values={Object.values(TODO_MODEL_TYPE)} />
          <FormSelect name="importance" values={Object.values(TODO_MODEL_IMPORTANCE)} />
          <FormSelect name="progress" values={[TODO_MODEL_PROGRESS.JUST_STARTED, TODO_MODEL_PROGRESS.HALFWAY_THERE]} />
        </div>
        <FormInput type="text" name="deadline" labelName="Deadline (MM/dd/yyyy hh:mm)" isTodoModifyInput={true} />
        <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>
      </form>
    </Wrapper>
  );
};

export default CreateTodo;
