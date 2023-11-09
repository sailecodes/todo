import { Link, Outlet } from "react-router-dom";

import home from "../../../imgs/home.svg";
import todo from "../../../imgs/todo.svg";
import profile from "../../../imgs/profile.svg";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-white);

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 10rem 1fr;

  height: 100%;
  width: 100%;

  padding: 2rem;

  .dashboard--side-nav {
    background-color: #a084e8;

    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    padding: 0.3rem;
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
  .dashboard--top-nav-profile-link > img {
    width: 4rem;
  }

  .dashboard--top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;
    padding-right: 0;
  }

  .dashboard--top-nav div:nth-child(1) {
    font-size: 3rem;
  }

  .dashboard--top-nav div:nth-child(2) {
    display: flex;
    gap: 1rem;
  }

  .dashboard--top-nav-profile-link {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.5rem;
    text-decoration: none;
  }
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div className="dashboard--side-nav-item">
          <Link
            to="/dashboard"
            className="dashboard--side-nav-link">
            <img src={home} />
          </Link>
        </div>
        <div className="dashboard--side-nav-item">
          <Link
            to="/dashboard/todos"
            className="dashboard--side-nav-link">
            <img src={todo} />
          </Link>
        </div>
        <div className="dashboard--side-nav-item">
          <Link
            to="/dashboard/profile"
            className="dashboard--side-nav-link">
            <img src={profile} />
          </Link>
        </div>
      </nav>
      <nav className="dashboard--top-nav">
        <div>
          <p>Procrastinating...what&apos;s that?</p>
        </div>
        <div>
          <Link
            to="/dashboard/profile"
            className="dashboard--top-nav-profile-link">
            <img src={profile} />
          </Link>
        </div>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
