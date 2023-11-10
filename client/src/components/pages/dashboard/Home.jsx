import { format } from "date-fns";
import { useQueries } from "@tanstack/react-query";

import axiosFetch from "../../../utilities/axiosFetch";

import ImportanceIcon from "../../helpers/icons/ImportanceIcon.jsx";
import ProgressIcon from "../../helpers/icons/ProgressIcon.jsx";
import DeadlineIcon from "../../helpers/icons/DeadlineIcon.jsx";

import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 19rem 33rem 1fr;
  gap: 3.5rem;

  padding: 2rem 0 0 2rem;

  // Home card GENERAL

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
    gap: 2rem;
  }

  .home--card-productivity-count {
    font-size: 6.5rem;
  }

  .home--card-productivity-count span {
    font-size: 4.3rem;
  }

  .home--card-coming {
    grid-row: 1 / 3;
    grid-column: 3;
  }

  // Home card COMING

  .home--card-coming {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }

  .home--card-coming-todo-title {
    font-size: 3.5rem;
  }

  .home--card-coming-todo-meta-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .home--card-coming-todo-meta-container div,
  .home--card-newest-todo-meta-container div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .home--card-coming-icon {
    width: 2rem;
    height: 2rem;
  }

  .home--card-coming-todo-meta-container p {
    font-size: 1.5rem;
  }

  // Home card NEWEST

  .home--card-newest {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    grid-column: 1 / 3;
  }

  .home--card-newest-data-container {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .home--card-newest-todo-title {
    font-size: 6.5rem;
  }

  .home--card-newest-todo-description {
    position: relative;
    bottom: 7.5%;

    font-size: 2.5rem;
  }

  .home--card-newest-todo-meta-container {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .home--card-newest-todo-meta-container img {
    width: 3rem;
    height: 3rem;
  }

  .home--card-newest-todo-meta-container p {
    font-size: 2rem;
  }

  .home--card-newest-todo-meta-container p::first-letter,
  .home--card-coming-todo-meta-container p::first-letter {
    text-transform: uppercase;
  }
`;

const HomeComingItem = ({ cardTitle, comingTodos }) => {
  return (
    <>
      <div className="home--card-heading-container">
        <div className="home--card-marker" />
        <p className="home--card-title">{cardTitle}</p>
      </div>
      <div className="home--card-coming-data-container">
        {comingTodos.map((todo) => {
          return (
            <div key={todo._id}>
              <p className="home--card-coming-todo-title">{todo.title}</p>
              <div className="home--card-coming-todo-meta-container">
                <div>
                  <ImportanceIcon />
                  <p>{todo.importance} priority</p>
                </div>
                <div>
                  <ProgressIcon />
                  <p>{todo.progress}</p>
                </div>
                <div>
                  <DeadlineIcon />
                  <p>{format(new Date(todo.deadline), "MM/dd/yyyy, hh:mm")}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

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
        <div className="home--card-newest-todo-meta-container">
          <div>
            <ImportanceIcon fill="yellow" />
            <p>{todoImportance} priority</p>
          </div>
          <div>
            <ProgressIcon fill="red" />
            <p>{todoProgress}</p>
          </div>
          <div>
            <DeadlineIcon />
            <p>{todoDeadline}</p>
          </div>
        </div>
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
        {resultsArr[2].isLoading || resultsArr[3].isLoading ? (
          "Loading..."
        ) : (
          <HomeComingItem cardTitle="Coming todos" comingTodos={[resultsArr[3].data]} />
        )}
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
            todoDeadline={format(new Date(resultsArr[3]?.data?.deadline), "MM/dd/yyyy, hh:mm")}
            todoProgress={resultsArr[3].data.progress}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
