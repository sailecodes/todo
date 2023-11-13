import { Link, NavLink, Outlet } from "react-router-dom";

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

    height: 125.1rem;

    border-radius: 12px;
  }

  .dashboard--side-nav > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
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

  ////////////////

  .dashboard--side-nav-item-container {
    display: grid;
    place-items: center;

    height: 6rem;
    width: 21rem;

    border-radius: 10px;
  }

  .dashboard--side-nav-item-container:has(.dashboard--side-nav-link.active) {
    background-color: var(--color-white);
  }

  .dashboard--side-nav-link {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 1.8rem;
    text-decoration: none;
  }

  .dashboard--side-nav-link > p {
    color: var(--color-white);
  }

  .dashboard--side-nav-link.active > p {
    color: var(--color-primary);
  }

  .dashboard--side-nav-link.active svg {
    stroke: var(--color-primary);
  }
`;

const HomeSideNavLink = ({ path, end }) => {
  return (
    <div className="dashboard--side-nav-item-container">
      <NavLink to={`/dashboard${path}`} end={end} className="dashboard--side-nav-link">
        {path === "/todos" ? (
          <>
            <TodoIcon stroke="white" />
            <p>Todos</p>
          </>
        ) : path === "/profile" ? (
          <>
            <ProfileIcon stroke="white" />
            <p>Profile</p>
          </>
        ) : (
          <>
            <HomeIcon stroke="white" />
            <p>Home</p>
          </>
        )}
      </NavLink>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div>
          <HomeSideNavLink path="" end={true} />
          <HomeSideNavLink path="/todos" end={false} />
          <HomeSideNavLink path="/profile" end={false} />
        </div>
      </nav>
      <nav className="dashboard--top-nav">
        <p>Procrastinating...what&apos;s that?</p>
        <div>
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
