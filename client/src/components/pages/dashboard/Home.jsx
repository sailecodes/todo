import { useQueries } from "@tanstack/react-query";

import Wrapper from "../../../styles/dashboard/HomeStyle";
import axiosFetch from "../../../utils/axiosFetch";
import styled from "styled-components";
import ProgressIcon from "../../custom/icons/ProgressIcon";
import ImportanceIcon from "../../custom/icons/ImportanceIcon";
import DeadlineIcon from "../../custom/icons/DeadlineIcon";

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
        queryKey: ["todos", "coming"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/coming");
          return data ? data : { reminder: "None coming yet!" };
        },
      },
      {
        queryKey: ["todos", "newest"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/newest");
          return data ? data : { reminder: "Either everything is finished or you haven't made one yet!" };
        },
      },
    ],
  });

  return (
    <HomeWrapper>
      <ProductivityCard
        title="Finished todos"
        stat={3}
        total={12}
        statIcon={"✅"}
      />
      <ProductivityCard
        title="Missed todos"
        stat={9}
        total={12}
        statIcon={"❌"}
      />
      <TodoCard title="Newest todo" />
      <ComingCard />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 2rem;

  overflow: hidden auto;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 27rem 27rem;
    grid-template-rows: 20rem 20rem;
  }

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2 / -1;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 27rem);
  }
`;

const ProductivityCard = ({ title, stat, total, statIcon }) => {
  return (
    <ProductivityCardWrapper>
      <header>
        <div className="productivity-card--square-icon"></div>
        <p className="productivity-card--title">{title}</p>
      </header>
      <div>
        <div>
          <p className="productivity-card--stat">
            {stat} <span>todos</span>
          </p>
          <p className="productivity-card--total">out of {total}</p>
        </div>
        <p className="productivity-card--icon">{statIcon}</p>
      </div>
    </ProductivityCardWrapper>
  );
};

const ProductivityCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--color-primary);
  color: var(--color-white);

  width: 30rem;
  height: 15rem;

  padding: 1.5rem;
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .productivity-card--square-icon {
    background-color: var(--color-white);

    width: 2.1rem;
    height: 2.1rem;

    border-radius: 5px;
  }

  .productivity-card--title {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .productivity-card--stat {
    font-size: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
  }

  .productivity-card--total {
    font-size: 1.1rem;
  }

  .productivity-card--icon {
    font-size: 3.3rem;

    margin-left: auto;
  }

  @media (min-width: 425px) {
    gap: 2.3rem;

    width: 35rem;
    height: 20rem;

    .productivity-card--square-icon {
      width: 2.3rem;
      height: 2.3rem;
    }

    .productivity-card--title {
      font-size: 2.1rem;
    }

    .productivity-card--stat {
      font-size: 3.4rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .productivity-card--total {
      font-size: 1.2rem;
    }

    .productivity-card--icon {
      font-size: 3.6rem;
    }
  }

  @media (min-width: 600px) {
    width: auto;

    align-self: flex-end;
  }

  @media (min-width: 1024px) {
  }
`;

const ComingCard = ({ data }) => {
  return (
    <ComingCardWrapper>
      <header>
        <div className="coming-card--square-icon"></div>
        <p className="coming-card--title">Coming todos</p>
      </header>
    </ComingCardWrapper>
  );
};

const ComingCardWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: unset;

    height: 100%;

    grid-row: 1 / -1;
    grid-column: 3;

    background-color: var(--color-primary);
    color: var(--color-white);

    border-radius: 8px;
    padding: 1.5rem;

    > header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .coming-card--square-icon {
      background-color: var(--color-white);

      width: 2.3rem;
      height: 2.3rem;

      border-radius: 5px;
    }

    .coming-card--title {
      font-size: 2.1rem;
      font-weight: 500;
    }
  }
`;

const TodoCard = ({ title, data }) => {
  return (
    <TodoCardWrapper>
      <header>
        <div className="todo-card--square-icon"></div>
        <p className="todo-card--title">{title}</p>
      </header>
      <div>
        <p className="todo-card--name">Go to the movie</p>
        <p className="todo-card--description">Meet with friends at Wallaby Medical theater</p>
      </div>
      <div className="todo-card--meta">
        <div>
          <ImportanceIcon
            fill="var(--color-yellow)"
            stroke="var(--color-black)"
          />
          <p className="todo-card-meta-text">High</p>
        </div>
        <div>
          <ProgressIcon
            fill="var(--color-blue)"
            stroke="var(--color-black)"
          />
          <p className="todo-card-meta-text">Halfway there</p>
        </div>
        <div>
          <DeadlineIcon
            fill="var(--color-red)"
            stroke="var(--color-black)"
          />
          <p className="todo-card-meta-text">Jan 28, 2023</p>
        </div>
      </div>
    </TodoCardWrapper>
  );
};

const TodoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  background-color: var(--color-primary);
  color: var(--color-white);

  width: 30rem;
  height: 15rem;

  padding: 1.5rem;
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .todo-card--square-icon {
    background-color: var(--color-white);

    width: 2.1rem;
    height: 2.1rem;

    border-radius: 5px;
  }

  .todo-card--title {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .todo-card--name {
    font-size: 2.2rem;
  }

  .todo-card--description {
    display: none;

    font-size: 1.2rem;
  }

  .todo-card--meta {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .todo-card--meta > div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .todo-card--meta svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  .todo-card-meta-text {
    font-size: 1rem;
  }

  @media (min-width: 425px) {
    gap: 1.2rem;

    width: 35rem;
    height: 20rem;

    .todo-card--square-icon {
      width: 2.3rem;
      height: 2.3rem;
    }

    .todo-card--title {
      font-size: 2.1rem;
    }

    .todo-card--name {
      font-size: 2.9rem;
    }

    .todo-card--description {
      display: unset;

      font-size: 1.2rem;
    }

    .todo-card--meta svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    .todo-card-meta-text {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 600px) {
    grid-column: 1 / -1;

    width: auto;

    align-self: flex-start;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / span 2;
  }
`;

{
  /* <ProductivityCard
        cardTitle="Finished todos"
        todosCount={resultsArr[0].data}
        isLoading={resultsArr[0].isPending}
      />
      <ProductivityCard
        cardTitle="Missed todos"
        todosCount={resultsArr[1].data}
        isLoading={resultsArr[1].isPending}
      />
      <ComingCard
        cardTitle="Coming todos"
        comingTodos={resultsArr[2].data}
        isLoading={resultsArr[2].isPending}
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
      <NonDataCard cardTitle="See all todos" /> */
}
