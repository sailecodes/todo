import ImportanceIcon from "../icons/ImportanceIcon";
import ProgressIcon from "../icons/ProgressIcon";

import styled from "styled-components";

const TodoCard = ({ title, data }) => {
  return (
    <TodoCardWrapper>
      <header>
        <div className="todo-card--square-icon"></div>
        <p className="todo-card--title">{title}</p>
      </header>
      <div>
        {/* .substring(0, 30) <-- .substring(0, 17) */}
        <p className="todo-card--name">{"Finish the assignment for next friday".substring(0, 17) + "..."}</p>
        <p className="todo-card--description">Meet with friends at Wallaby Medical theater</p>
      </div>
      <div className="todo-card--meta">
        <div>
          <ImportanceIcon
            fill="var(--color-yellow)"
            stroke="var(--color-black)"
          />
          <p className="todo-card--meta-text">High</p>
        </div>
        <div>
          <ProgressIcon
            fill="var(--color-blue)"
            stroke="var(--color-black)"
          />
          <p className="todo-card--meta-text">Halfway there</p>
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

  .todo-card--meta-text {
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

    .todo-card--meta {
      gap: 2rem;
    }

    .todo-card--meta svg {
      width: var(--size-svg-lg);
      height: var(--size-svg-lg);
    }

    .todo-card--meta-text {
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

export default TodoCard;
