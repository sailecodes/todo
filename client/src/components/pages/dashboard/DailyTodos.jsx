import { useQuery } from "@tanstack/react-query";

import axiosFetch from "../../../utils/axiosFetch";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../custom/dashboard/TodoCard";

import styled from "styled-components";

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

const DailyTodos = () => {
  const dailyTodos = useQuery({
    queryKey: ["todos", "daily"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get("/todos/daily");
      return data;
    },
  });

  return (
    <TodosWrapper>
      {/* {dailyTodos.isError && (
        <div className="error-container">
          <p>Whoops, an error occurred.</p>
        </div>
      )}
      {dailyTodos.isPending && <PulseLoader color="var(--color-primary)" />}
      {!dailyTodos.isError && !dailyTodos.isPending && (
        <>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Daily"
            />
          </div>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Daily"
            />
          </div>
          <div className="todos--todo-container">
            <TodoCard
              isHome={false}
              title="Daily"
            />
          </div>
        </>
      )} */}
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="Daily"
        />
      </div>
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="Daily"
        />
      </div>
      <div className="todos--todo-container">
        <TodoCard
          isHome={false}
          title="Daily"
        />
      </div>
    </TodosWrapper>
  );
};

export default DailyTodos;
