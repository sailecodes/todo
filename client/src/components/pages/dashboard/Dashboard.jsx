import { Link, Outlet } from "react-router-dom";

import home from "../../../imgs/home.svg";
import todo from "../../../imgs/todo.svg";
import profile from "../../../imgs/profile.svg";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: gray;

  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 10rem 1fr;

  height: 100%;
  width: 100%;

  .dashboard--side-nav {
    background-color: var(--color-white);

    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .dashboard--side-nav-link {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    font-size: 1.8rem;
    text-decoration: none;
  }

  .dashboard--side-nav-logo {
    font-size: 6rem;
  }

  .dashboard--top-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-right: 2.7rem;
  }

  .dashboard--top-nav-profile-link {
    font-size: 2.5rem;
    text-decoration: none;

    margin-left: 0.8rem;
  }

  .dashboard--side-nav-link > img,
  .dashboard--top-nav > img {
    width: 4rem;
  }
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div>
          <Link to="/dashboard" className="dashboard--side-nav-link">
            <img src={home} />
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/todos" className="dashboard--side-nav-link">
            <img src={todo} />
            <p>Todos</p>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/profile" className="dashboard--side-nav-link">
            <img src={profile} />
            <p>Profile</p>
          </Link>
        </div>
      </nav>
      <nav className="dashboard--top-nav">
        <img src={profile} />
        <Link to="/dashboard/profile" className="dashboard--top-nav-profile-link">
          Elias
        </Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
