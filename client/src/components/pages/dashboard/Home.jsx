import { format } from "date-fns";
import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import axiosFetch from "../../../utilities/axiosFetch";

import ImportanceIcon from "../../helpers/icons/ImportanceIcon";
import ProgressIcon from "../../helpers/icons/ProgressIcon";
import DeadlineIcon from "../../helpers/icons/DeadlineIcon";
import CreateIcon from "../../helpers/icons/CreateIcon";
import SeeIcon from "../../helpers/icons/SeeIcon";

import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 19rem 33rem 10rem 1fr;
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

  // Home card FINISHED and PAST DEADLINE (productivity)

  .home--card-productivity {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .home--card-productivity > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 8rem;
  }

  .home--card-productivity-count {
    font-size: 6.5rem;
  }

  .home--card-productivity-count span {
    font-size: 4.3rem;
  }

  .home--card-productivity-icon {
    width: 12rem;
    height: 12rem;
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
    font-size: 1.3rem;
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

  // Home card CREATE

  .home--card-non-data {
    display: flex;
    align-items: center;
  }

  .home--card-non-data-link {
    color: var(--color-black);

    margin-left: auto;
  }

  .home--card-non-data-icon {
    width: 3rem;
    height: 3rem;
  }
`;

const HomeComingCard = ({ cardTitle, comingTodos }) => {
  return (
    <div className="home--card home--card-coming">
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
                  <ImportanceIcon fill="yellow" />
                  <p>{todo.importance} priority</p>
                </div>
                <div>
                  <ProgressIcon fill="azure" />
                  <p>{todo.progress}</p>
                </div>
                <div>
                  <DeadlineIcon fill="tomato" />
                  <p>{format(new Date(todo.deadline), "MMM d, yyyy @ h:mma")}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HomeProductivityCard = ({ cardTitle, todosCount }) => {
  return (
    <div className="home--card home--card-productivity">
      <div className="home--card-heading-container">
        <div className="home--card-marker" />
        <p className="home--card-title">{cardTitle}</p>
      </div>
      <div>
        <p className="home--card-productivity-count">
          {todosCount} <span>items</span>
        </p>
      </div>
    </div>
  );
};

const HomeNewestCard = ({ cardTitle, todoTitle, todoDescription, todoImportance, todoDeadline, todoProgress }) => {
  return (
    <div className="home--card home--card-newest">
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
            <ProgressIcon fill="azure" />
            <p>{todoProgress}</p>
          </div>
          <div>
            <DeadlineIcon fill="tomato" />
            <p>{todoDeadline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeNonDataCard = ({ cardTitle }) => {
  return (
    <div className="home--card home--card-non-data">
      <div className="home--card-heading-container">
        <div className="home--card-marker" />
        <p className="home--card-title">{cardTitle}</p>
      </div>
      <Link className="home--card-non-data-link" to={`/dashboard/todos/`}>
        {cardTitle === "Create todo" ? <CreateIcon /> : <SeeIcon />}
      </Link>
    </div>
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
      {resultsArr[0].isLoading ? (
        <p>Loading...</p>
      ) : (
        <HomeProductivityCard cardTitle="Finished todos" todosCount={resultsArr[0].data} />
      )}
      {resultsArr[1].isLoading ? (
        <p>Loading...</p>
      ) : (
        <HomeProductivityCard cardTitle="Missed todos" todosCount={resultsArr[1].data} />
      )}
      {resultsArr[2].isLoading || resultsArr[3].isLoading ? (
        <p>Loading...</p>
      ) : (
        <HomeComingCard cardTitle="Coming todos" comingTodos={[resultsArr[3].data]} />
      )}
      {resultsArr[3].isLoading ? (
        <p>Loading...</p>
      ) : (
        <HomeNewestCard
          cardTitle="Newest todo"
          todoTitle={resultsArr[3].data.title}
          todoDescription={resultsArr[3].data.description}
          todoImportance={resultsArr[3].data.importance}
          todoDeadline={format(new Date(resultsArr[3]?.data?.deadline), "MMM d, yyyy @ h:mmaaa")}
          todoProgress={resultsArr[3].data.progress}
        />
      )}
      <HomeNonDataCard cardTitle="Create todo" />
      <HomeNonDataCard cardTitle="See daily todos" />
      <HomeNonDataCard cardTitle="See all todos" />
    </Wrapper>
  );
};

export default Home;
