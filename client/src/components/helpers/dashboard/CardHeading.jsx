import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/CardHeadingStyle";
import axiosFetch from "../../../utils/axiosFetch";
import Error from "../../pages/error/Error";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const CardHeading = ({ cardTitle, todoId, isModifiable }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => {
      return axiosFetch.delete(`/todos/${todoId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isError) return <Error />;

  return (
    <Wrapper>
      <div className="card-heading--container">
        <div className="card-marker" />
        <p className="card-title">{cardTitle}</p>
        {isModifiable && (
          <div className="card-heading--links-container">
            <Link to={`/dashboard/todos/edit/${todoId}`}>
              <EditIcon />
            </Link>
            <button onClick={mutate}>
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CardHeading;
