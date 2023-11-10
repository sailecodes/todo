import { Link, Outlet } from "react-router-dom";

import HomeIcon from "../../helpers/icons/HomeIcon";
import TodoIcon from "../../helpers/icons/TodoIcon";
import ProfileIcon from "../../helpers/icons/ProfileIcon";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e8e8e8;

  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: 10rem 1fr;

  height: 100%;
  width: 100%;

  padding: 2rem;

  .dashboard--nav-icon {
    width: 4rem;
    height: 4rem;
  }

  .dashboard--side-nav {
    background-color: var(--color-primary);

    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.9rem;

    border-radius: 12px;
  }

  .dashboard--side-nav > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  .dashboard--side-nav-link {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    font-size: 1.8rem;
    text-decoration: none;
  }

  .dashboard--side-nav-link p {
    color: var(--color-white);
  }

  .dashboard--side-nav-logo {
    color: var(--color-white);

    font-size: 6rem;
  }

  .dashboard--top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;
    padding-right: 0rem;
  }

  .dashboard--top-nav > p {
    color: var(--color-black);

    font-size: 4rem;
  }

  .dashboard--top-nav div:nth-child(2) {
    display: flex;
    gap: 1.5rem;
  }

  .dashboard--top-nav-search-bar {
    font-size: 1.8rem;

    padding: 0 1rem 0 1rem;
    border: none;
    border-radius: 8px;
  }

  .dashboard--top-nav-profile-link {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.5rem;
    text-decoration: none;
  }

  .dashboard--side-nav-link > img,
  .dashboard--top-nav-profile-link > img {
    width: 4rem;
  }
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div>
          <div className="dashboard--side-nav-item-container">
            <Link to="/dashboard" className="dashboard--side-nav-link">
              <HomeIcon stroke="white" />
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/todos" className="dashboard--side-nav-link">
              <TodoIcon stroke="white" />
              <p>Todos</p>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/profile" className="dashboard--side-nav-link">
              <ProfileIcon stroke="white" />
              <p>Profile</p>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="dashboard--top-nav">
        <p>Procrastinating...what&apos;s that?</p>
        <div>
          <input type="text" className="dashboard--top-nav-search-bar" placeholder="Search a todo..." />
          <Link to="/dashboard/profile" className="dashboard--top-nav-profile-link">
            <ProfileIcon stroke="black" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
