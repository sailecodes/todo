import { useQueries } from "@tanstack/react-query";
import styled from "styled-components";
import axiosFetch from "../../../utilities/axiosFetch";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20rem 1fr 1fr;
  gap: 3.5rem;

  padding: 2rem 0 0 2rem;

  .home--card {
    background-color: var(--color-white);

    padding: 2rem;
    border-radius: 12px;
  }

  .home--card-heading-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .home--card-marker {
    background-color: var(--color-primary);

    height: 3.3rem;
    width: 3.3rem;

    border-radius: 6px;
  }

  .home--card-title {
    font-size: 3rem;
    font-weight: 600;
  }

  // Home card FINISHED and PAST DEADLINE

  .home--card-productivity {
    display: flex;
    flex-direction: column;
  }

  .home--card-productivity-count {
    font-size: 6.5rem;

    margin-top: auto;
  }

  .home--card-productivity-count span {
    font-size: 4.3rem;
  }

  .home--card-coming {
    grid-row: 1 / 3;
    grid-column: 3;
  }

  // Home card NEWEST

  .home--card-newest {
    grid-column: 1 / 3;
  }

  .home--card-newest-todo-title {
    font-size: 6.5rem;
  }

  .home--card-newest-todo-description {
    font-size: 3rem;
  }
`;

const HomeProductivityItem = ({ cardTitle, todosCount }) => {
  return (
    <>
      <div className="home--card-heading-container">
        <div className="home--card-marker" />
        <p className="home--card-title">{cardTitle}</p>
      </div>
      <p className="home--card-productivity-count">
        {todosCount} <span>items</span>
      </p>
    </>
  );
};

const HomeNewestItem = ({ cardTitle, todoTitle, todoDescription, todoImportance, todoDeadline, todoProgress }) => {
  return (
    <>
      <div className="home--card-heading-container">
        <div className="home--card-marker" />
        <p className="home--card-title">{cardTitle}</p>
      </div>
      <div className="home--card-newest-data-container">
        <p className="home--card-newest-todo-title">{todoTitle}</p>
        <p className="home--card-newest-todo-description">
          {todoDescription ? todoDescription : "An important todo item...do it."}
        </p>
        <p className="home--card-newest-todo-importance">{todoImportance}</p>
        <p className="home--card-newest-todo-deadline">{todoDeadline}</p>
        <p className="home--card-newest-todo-progress">{todoProgress}</p>
      </div>
    </>
  );
};

const Home = () => {
  const resultsArr = useQueries({
    queries: [
      {
        queryKey: ["todos", "finished"],
        queryFn: async () => {
          const {
            // FIXME: Might not need data (fix server-side also if data not needed)
            data: { msg, data, count },
          } = await axiosFetch.get("/todos/finished");
          return count;
        },
      },
      {
        queryKey: ["todos", "past-deadline"],
        queryFn: async () => {
          const {
            data: { msg, data, count },
          } = await axiosFetch.get("/todos/past-deadline");
          return count;
        },
      },
      {
        // TODO: Implement coming todos on server-side
        queryKey: ["todos", "coming"],
        queryFn: async () => {
          return ["to be implemented"];
        },
      },
      {
        queryKey: ["todos", "newest"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/newest");
          return data;
        },
      },
    ],
  });

  console.log(resultsArr[0].data);
  console.log(resultsArr[1].data);
  console.log(resultsArr[2].data);
  console.log(resultsArr[3].data);

  return (
    <Wrapper>
      <div className="home--card home--card-productivity">
        {resultsArr[0].isLoading ? (
          "Loading..."
        ) : (
          <HomeProductivityItem cardTitle="Finished Todos" todosCount={resultsArr[0].data} />
        )}
      </div>
      <div className="home--card home--card-productivity">
        {resultsArr[1].isLoading ? (
          "Loading..."
        ) : (
          <HomeProductivityItem cardTitle="Missed Todos" todosCount={resultsArr[1].data} />
        )}
      </div>
      <div className="home--card home--card-coming">
        {resultsArr[2].isLoading ? "Loading..." : `Coming todos: ${resultsArr[2].data}`}
      </div>
      <div className="home--card home--card-newest">
        {resultsArr[3].isLoading ? (
          "Loading..."
        ) : (
          <HomeNewestItem
            cardTitle="Newest Todo"
            todoTitle={resultsArr[3].data.title}
            todoDescription={resultsArr[3].data.description}
            todoImportance={resultsArr[3].data.importance}
            todoDeadline={resultsArr[3].data.deadline}
            todoProgress={resultsArr[3].data.progress}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
