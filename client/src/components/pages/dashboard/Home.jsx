import { useQueries } from "@tanstack/react-query";

import axiosFetch from "../../../utils/axiosFetch";
import styled from "styled-components";
import ProgressIcon from "../../custom/icons/ProgressIcon";
import ImportanceIcon from "../../custom/icons/ImportanceIcon";

const Home = () => {
  const todosResults = useQueries({
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
  padding: 2rem;

  overflow: hidden auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 27rem);
    grid-template-rows: repeat(2, 20rem);
    justify-content: center;
  }

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2 / -1;
  }

  @media (min-width: 1055px) {
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

    width: var(--font-subheading-sm);
    height: var(--font-subheading-sm);

    border-radius: 5px;
  }

  .productivity-card--title {
    font-size: var(--font-subheading-sm);
    font-weight: 500;
  }

  .productivity-card--stat {
    font-size: var(--font-heading-sm);
  }

  > div {
    display: flex;
    align-items: center;
  }

  .productivity-card--total {
    font-size: var(--font-text-sm);
  }

  .productivity-card--icon {
    font-size: var(--size-icon-sm);

    margin-left: auto;
  }

  @media (min-width: 425px) {
    gap: 2.3rem;

    width: 35rem;
    height: 20rem;

    .productivity-card--square-icon {
      width: var(--font-subheading-lg);
      height: var(--font-subheading-lg);
    }

    .productivity-card--title {
      font-size: var(--font-subheading-lg);
    }

    .productivity-card--stat {
      font-size: var(--font-heading-lg);
    }

    > div {
      display: flex;
      align-items: center;
    }

    .productivity-card--total {
      font-size: var(--font-text-lg);
    }

    .productivity-card--icon {
      font-size: var(--size-icon-lg);
    }
  }

  @media (min-width: 600px) {
    align-self: flex-end;

    width: auto;
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

  @media (min-width: 1055px) {
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

      width: var(--font-subheading-lg);
      height: var(--font-subheading-lg);

      border-radius: 5px;
    }

    .coming-card--title {
      font-size: var(--font-subheading-lg);
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

    width: var(--font-subheading-sm);
    height: var(--font-subheading-sm);

    border-radius: 5px;
  }

  .todo-card--title {
    font-size: var(--font-subheading-sm);
    font-weight: 500;
  }

  .todo-card--name {
    font-size: var(--font-heading-sm);
  }

  .todo-card--description {
    display: none;

    font-size: var(--font-text-lg);
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
    width: var(--size-svg-sm);
    height: var(--size-svg-sm);
  }

  .todo-card-meta-text {
    font-size: var(--font-text-sm);
  }

  @media (min-width: 425px) {
    gap: 1.2rem;

    width: 35rem;
    height: 20rem;

    .todo-card--square-icon {
      width: var(--font-subheading-lg);
      height: var(--font-subheading-lg);
    }

    .todo-card--title {
      font-size: var(--font-subheading-lg);
    }

    .todo-card--name {
      font-size: var(--font-heading-lg);
    }

    .todo-card--description {
      display: unset;

      font-size: var(--font-text-lg);
    }

    .todo-card--meta svg {
      width: var(--size-svg-lg);
      height: var(--size-svg-lg);
    }

    .todo-card-meta-text {
      font-size: var(--font-text-lg);
    }
  }

  @media (min-width: 600px) {
    grid-column: 1 / -1;

    width: auto;

    align-self: flex-start;
  }

  @media (min-width: 1055px) {
    grid-column: 1 / span 2;
  }
`;
