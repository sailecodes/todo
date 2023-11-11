import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

import CardHeading from "../../helpers/dashboard/CardHeading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 2rem 0 0 2rem;

  // Todo GENERAL

  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10rem;
    gap: 3.5rem;
  }

  a {
    text-decoration: none;
  }

  .todo--nav-card {
    background-color: var(--color-white);

    display: flex;
    align-items: center;

    padding: 2rem;
    border-radius: 12px;
  }

  // Todo Link ACTIVE

  .card-marker,
  .todo--nav-card {
    transition: background-color 0.25s;
  }

  .card-title {
    transition: color 0.25s;
  }

  .active .todo--nav-card {
    background-color: var(--color-primary);
  }

  .active .card-marker {
    background-color: var(--color-white);
  }

  .active .card-title {
    color: var(--color-white);
  }
`;

const TodoNavCard = ({ cardTitle }) => {
  return (
    <div className="todo--nav-card">
      <CardHeading cardTitle={cardTitle} />
    </div>
  );
};

const Todo = () => {
  return (
    <Wrapper>
      <nav>
        <NavLink to="/dashboard/todos" end>
          <TodoNavCard cardTitle="Daily todos" />
        </NavLink>
        <NavLink to="/dashboard/todos/all">
          <TodoNavCard cardTitle="All todos" />
        </NavLink>
        <NavLink to="/dashboard/todos/create">
          <TodoNavCard cardTitle="Create todo" />
        </NavLink>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Todo;
