import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLoaderData, useNavigate } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/MutateTodoStyle";
import axiosFetch from "../../../utilities/axiosFetch";
import FormInput from "../../helpers/dashboard/FormInput";
import FormSelect from "../../helpers/dashboard/FormSelect";
import Loading from "../../helpers/dashboard/Loading";
import Error from "../error/Error";
import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS, TODO_MODEL_TYPE } from "../../../../../server/utils/constants";
import CardHeading from "../../helpers/dashboard/CardHeading";

const EditTodo = () => {
  const id = useLoaderData();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["todos", id],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get(`/todos/${id}`);
      console.log(data);
      return data;
    },
  });

  const { mutate, isError } = useMutation({
    mutationFn: (editData) => {
      if (!editData.deadline) delete editData.deadline;
      return axiosFetch.patch(`/todos/${id}`, editData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/dashboard/todos/all");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  const getDeadline = (oldDeadline) => {
    if (!oldDeadline) return "";

    const tmpDeadline = new Date(oldDeadline);

    const deadline = {
      year: tmpDeadline.getFullYear(),
      month: tmpDeadline.getMonth() < 10 ? `0` + tmpDeadline.getMonth() + 1 : tmpDeadline.getMonth() + 1,
      day: tmpDeadline.getDate() < 10 ? `0` + tmpDeadline.getDate() : tmpDeadline.getDate(),
      hour: tmpDeadline.getHours() < 10 ? `0` + tmpDeadline.getHours() : tmpDeadline.getHours(),
      minute: tmpDeadline.getMinutes() < 10 ? `0` + tmpDeadline.getMinutes() : tmpDeadline.getMinutes(),
    };

    return `${deadline.year}-${deadline.month}-${deadline.day}T${deadline.hour}:${deadline.minute}`;
  };

  if (isPending) return <Loading />;

  if (isError) return <Error />;

  return (
    <Wrapper>
      <CardHeading cardTitle="Edit" isModifiable={false} />
      <form onSubmit={handleSubmit}>
        <FormInput type="text" name="title" defaultValue={data.title} isTodoModifyInput={true} />
        <FormInput type="text" name="description" defaultValue={data.description} isTodoModifyInput={true} />
        <div className="form-select--container">
          <FormSelect name="type" values={Object.values(TODO_MODEL_TYPE)} defaultValue={data.type} />
          <FormSelect name="importance" values={Object.values(TODO_MODEL_IMPORTANCE)} defaultValue={data.importance} />
          <FormSelect name="progress" values={Object.values(TODO_MODEL_PROGRESS)} defaultValue={data.progress} />
        </div>
        <FormInput
          type="datetime-local"
          name="deadline"
          defaultValue={getDeadline(data.deadline)}
          isTodoModifyInput={true}
        />
        <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>
      </form>
    </Wrapper>
  );
};

export default EditTodo;
