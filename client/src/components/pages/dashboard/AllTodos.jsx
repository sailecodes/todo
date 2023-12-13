import PulseLoader from "react-spinners/PulseLoader";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";

import axiosFetch from "../../../utils/axiosFetch";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../custom/dashboard/TodoCard";

const TodosWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2rem;

  overflow-y: auto;

  .error-container {
    display: grid;
    place-items: center;

    height: 100%;
  }

  .error-container p {
    color: var(--color-primary);

    font-size: var(--font-subheading-sm);
    font-weight: 500;
  }

  @media (min-width: 600px) {
    .todos--todo-container {
      display: grid;
      grid-template-columns: repeat(2, 28rem);
      grid-auto-rows: 20rem;
      justify-content: center;
    }

    .error-container p {
      font-size: var(--font-subheading-lg);
    }
  }

  @media (min-width: 800px) {
    grid-column: 2;
    grid-row: 2 / -1;
  }

  @media (min-width: 1055px) {
    .error-container,
    .todos--todo-container {
      grid-template-columns: 14.5rem 56rem 14.5rem;
      grid-auto-rows: 20rem;
      grid-template-areas: ". todo .";
    }

    .error-container p,
    .todos--todo-container > div {
      grid-area: todo;
    }

    .error-container {
      grid-auto-rows: 100%;
    }

    .error-container p {
      font-size: var(--font-subheading-lg);
      font-weight: 500;
    }
  }
`;

const AllTodos = () => {
  const allTodos = useQuery({
    queryKey: ["todos", "all"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get("/todos");
      return data;
    },
  });

  return (
    <TodosWrapper>
      {/* {allTodos.isError && (
        <div className="error-container">
          <p>Whoops, an error occurred.</p>
        </div>
      )}
      {allTodos.isPending && <PulseLoader color="var(--color-primary)" />}
      {!allTodos.isError && !allTodos.isPending && (
        <>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Todo"
            />
          </div>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Todo"
            />
          </div>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Todo"
            />
          </div>
        </>
      )} */}
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="All"
        />
      </div>
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="All"
        />
      </div>
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="All"
        />
      </div>
    </TodosWrapper>
  );
};
export default AllTodos;
