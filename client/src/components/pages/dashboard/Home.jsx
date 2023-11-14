import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import axiosFetch from "../../../utilities/axiosFetch";
import CreateIcon from "../../helpers/icons/CreateIcon";
import SeeIcon from "../../helpers/icons/SeeIcon";
import CardHeading from "../../helpers/dashboard/CardHeading";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../helpers/dashboard/TodoCard";

import styled from "styled-components";
import TodoInformation from "../../helpers/dashboard/TodoInformation";
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

  // Home card FINISHED and PAST DEADLINE (productivity)

  .home--card-productivity {
    color: var(--color-black);

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

  // Home card COMING

  .home--card-coming {
    color: var(--color-black);

    grid-row: 1 / 3;
    grid-column: 3;

    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }

  // Home card CREATE

  .home--card-non-data {
    color: var(--color-black);

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

const ComingCard = ({ cardTitle, comingTodos, isLoading }) => {
  return (
    <div className="home--card home--card-coming">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <CardHeading cardTitle={cardTitle} />
          <div className="home--card-coming-data-container">
            {comingTodos.map((todo) => {
              return (
                <TodoInformation
                  key={todo._id}
                  isInTodoCard={false}
                  title={todo.title}
                  description={todo.description}
                  importance={todo.importance}
                  progress={todo.progress}
                  deadline={todo?.deadline}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const ProductivityCard = ({ cardTitle, todosCount, isLoading }) => {
  return (
    <div className="home--card home--card-productivity">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <CardHeading cardTitle={cardTitle} />
          <div>
            <p className="home--card-productivity-count">
              {todosCount} <span>items</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const NonDataCard = ({ cardTitle }) => {
  return (
    <div className="home--card home--card-non-data">
      <CardHeading cardTitle={cardTitle} />
      <Link
        className="home--card-non-data-link"
        to={`/dashboard/todos${cardTitle === "See all todos" ? "/all" : cardTitle === "Create todo" ? "/create" : ""}`}>
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
            data: { count },
          } = await axiosFetch.get("/todos/finished");
          return count;
        },
      },
      {
        queryKey: ["todos", "past-deadline"],
        queryFn: async () => {
          const {
            data: { count },
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
          return data ? data : { reminder: "No todos yet. Stop procrastinating and create one! ...please?" };
        },
      },
    ],
  });

  return (
    <Wrapper>
      <ProductivityCard
        cardTitle="Finished todos"
        todosCount={resultsArr[0].data}
        isLoading={resultsArr[0].isPending}
      />
      <ProductivityCard cardTitle="Missed todos" todosCount={resultsArr[1].data} isLoading={resultsArr[1].isLoading} />
      <ComingCard
        cardTitle="Coming todos"
        comingTodos={[resultsArr[3].data]}
        isLoading={resultsArr[2].isPending || resultsArr[3].isPending}
      />
      <TodoCard
        cardTitle="Newest todo"
        reminder={resultsArr[3].data?.reminder}
        title={resultsArr[3].data?.title}
        description={resultsArr[3].data?.description}
        importance={resultsArr[3].data?.importance}
        progress={resultsArr[3].data?.progress}
        deadline={resultsArr[3].data?.deadline}
        isPending={resultsArr[3].isPending}
        isModifiable={false}
      />
      <NonDataCard cardTitle="Create todo" />
      <NonDataCard cardTitle="See daily todos" />
      <NonDataCard cardTitle="See all todos" />
    </Wrapper>
  );
};

export default Home;
