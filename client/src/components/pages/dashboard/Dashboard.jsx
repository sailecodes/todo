import { useNavigate, Outlet } from "react-router-dom";

import DashboardSideNavLink from "../../helpers/dashboard/DashboardSideNavLink";

import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import axiosFetch from "../../../utilities/axiosFetch";

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
    gap: 2rem;
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

  .dashboard--logout-btn {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 10rem;
    height: 4rem;

    font-size: 1.8rem;

    border: 1px solid var(--color-black);
    border-radius: 8px;
  }

  .dashboard--logout-btn:hover {
    cursor: pointer;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => {
      return axiosFetch.get("/auth/logout");
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  return (
    <Wrapper>
      <nav className="dashboard--side-nav">
        <p className="dashboard--side-nav-logo">IV</p>
        <div>
          <DashboardSideNavLink path="" end={true} linkName="Home" />
          <DashboardSideNavLink path="/todos" end={false} linkName="Todos" />
        </div>
      </nav>
      <nav className="dashboard--top-nav">
        <p>Procrastinating...what&apos;s that?</p>
        <div>
          <button className="dashboard--logout-btn" onClick={mutate}>
            Logout
          </button>
        </div>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
