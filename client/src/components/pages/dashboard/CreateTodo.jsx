import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Wrapper from "../../../styles/dashboard/MutateTodoStyle";
import axiosFetch from "../../../utils/axiosFetch";
import Error from "../error/Error";
import FormInput from "../../helpers/dashboard/FormInput";
import FormSelect from "../../helpers/dashboard/FormSelect";
import CardHeading from "../../helpers/dashboard/CardHeading";
import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS, TODO_MODEL_TYPE } from "../../../../../server/utils/constants";

const CreateTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (createData) => {
      if (!createData.deadline) delete createData.deadline;
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
      <CardHeading
        cardTitle="Create"
        isModifiable={false}
      />
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          isTodoModifyInput={true}
        />
        <FormInput
          type="text"
          name="description"
          isTodoModifyInput={true}
        />
        <div className="form-select--container">
          <FormSelect
            name="type"
            values={Object.values(TODO_MODEL_TYPE)}
          />
          <FormSelect
            name="importance"
            values={Object.values(TODO_MODEL_IMPORTANCE)}
          />
          <FormSelect
            name="progress"
            values={[TODO_MODEL_PROGRESS.JUST_STARTED, TODO_MODEL_PROGRESS.HALFWAY_THERE]}
          />
        </div>
        <FormInput
          type="datetime-local"
          name="deadline"
          isTodoModifyInput={true}
        />
        <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>
      </form>
    </Wrapper>
  );
};

export default CreateTodo;
