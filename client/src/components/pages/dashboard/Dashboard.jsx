import { Link, Outlet } from "react-router-dom";

import home from "../../../imgs/home.svg";
import todo from "../../../imgs/todo.svg";
import profile from "../../../imgs/profile.svg";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: gray;

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 10rem 1fr;

  height: 100%;
  width: 100%;

  padding: 2rem;

  .dashboard--side-nav {
    background-color: lightblue;

    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    border-radius: 12px;
  }

  .dashboard--side-nav-logo {
    font-size: 6rem;
  }

  .dashboard--side-nav-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .dashboard--side-nav-link {
    font-size: 1.5rem;
  }

  .dashboard--side-nav-link > img,
  .dashboard--top-nav > img {
    width: 4rem;
  }

  .dashboard--top-nav {
    background-color: lightgreen;

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
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div className="dashboard--side-nav-item">
          <Link to="/dashboard" className="dashboard--side-nav-link">
            <img src={home} />
          </Link>
        </div>
        <div className="dashboard--side-nav-item">
          <Link to="/dashboard/todos" className="dashboard--side-nav-link">
            <img src={todo} />
          </Link>
        </div>
        <div className="dashboard--side-nav-item">
          <Link to="/dashboard/profile" className="dashboard--side-nav-link">
            <img src={profile} />
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
