import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import axiosFetch from "../../../utils/axiosFetch";
import PopupIcon from "../../custom/icons/PopupIcon";
import ReturnIcon from "../../custom/icons/ReturnIcon";
import HomeIcon from "../../custom/icons/HomeIcon";
import CreateIcon from "../../custom/icons/CreateIcon";
import LogoutIcon from "../../custom/icons/LogoutIcon";
import AllIcon from "../../custom/icons/AllIcon";
import DailyIcon from "../../custom/icons/DailyIcon";
import Footer from "../../custom/dashboard/Footer";

import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: 6.5rem 1fr;

  background-color: var(--color-bg);

  height: 100vh;

  overflow: hidden;

  > header {
    display: none;
  }

  @media (min-width: 800px) {
    grid-template-columns: 19rem 1fr;

    > header {
      grid-column: 1 / -1;

      display: flex;
      align-items: center;
      justify-content: space-between;

      color: var(--color-primary);
      gap: 5rem;

      border-bottom: 1px solid var(--color-border);
      padding: 2rem;
    }

    .dashboard--logo {
      font-size: var(--font-heading-main-lgs);
      font-weight: 500;
      letter-spacing: -1px;
    }

    .dashboard--tagline {
      grid-column: 2;
      grid-row: 1;

      display: flex;
      align-items: center;

      font-size: 2.3rem;
      font-weight: 500;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: 19rem 1fr 21rem;
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <header>
        <p className="dashboard--logo">TodoIV</p>
        <p className="dashboard--tagline">Procrastinating, what&apos;s that?</p>
      </header>
      <DashboardSideNav />
      <DashboardTopNav />
      <Outlet />
      <Footer />
    </DashboardWrapper>
  );
};

const DashboardSideNavWrapper = styled.nav`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;

    grid-row: 2 / -1;
    grid-column: 1;

    height: 100vh;

    padding: 2rem;

    .dashboard-side-nav--links {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      height: 100%;
    }

    .dashboard-side-nav--links svg {
      width: 3rem;
      height: auto;
    }

    .dashboard-side-nav--links a {
      display: flex;
      align-items: center;
      gap: 1rem;

      color: var(--color-primary);

      height: 4rem;
      width: 15rem;

      font-size: 1.8rem;
      font-weight: 500;

      padding: 0 1rem;
      border-radius: 5px;
    }

    .dashboard-side-nav--links a.active {
      background-color: var(--color-auth-border);
      color: var(--color-primary);
    }

    .dashboard-side-nav--logout-btn {
      display: flex;
      align-items: center;
      gap: 1rem;

      color: var(--color-primary);

      height: 4rem;
      width: 15rem;

      font-size: 1.8rem;

      padding: 0 1rem;
    }
  }
`;

const DashboardSideNav = () => {
  const navigate = useNavigate();

  const logout = useMutation({
    mutationFn: () => {
      return axiosFetch.get("/auth/logout");
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  return (
    <DashboardSideNavWrapper>
      <div className="dashboard-side-nav--links">
        <NavLink
          to="/dashboard"
          end>
          <HomeIcon fill="var(--color-primary)" /> Home
        </NavLink>
        <NavLink to="/dashboard/all">
          <AllIcon fill="var(--color-primary)" /> All
        </NavLink>
        <NavLink to="/dashboard/daily">
          <DailyIcon fill="var(--color-primary)" /> Daily
        </NavLink>
        <NavLink to="/dashboard/create">
          <CreateIcon fill="var(--color-primary)" /> Create
        </NavLink>
        <button
          className="dashboard-side-nav--logout-btn"
          onClick={() => logout.mutate()}>
          <LogoutIcon fill="var(--color-primary)" />
          Logout
        </button>
      </div>
    </DashboardSideNavWrapper>
  );
};

const DashboardTopNavWrapper = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-row: 1;

  color: var(--color-primary);

  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-border);

  .dashboard-top-nav--logo {
    font-size: var(--font-heading-main-sms);
    font-weight: 500;
    letter-spacing: -1px;
  }

  button {
    display: grid;
    place-items: center;
  }

  svg {
    width: var(--svg-dim-sms);
    height: var(--svg-dim-sms);
  }

  @media (min-width: 425px) {
    .dashboard-top-nav--logo {
      font-size: var(--font-heading-main-lgs);
    }

    svg {
      width: var(--svg-dim-lgs);
      height: var(--svg-dim-lgs);
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const DashboardTopNav = () => {
  const [isPopupToggled, setIsPopupToggled] = useState(false);
  const handlePopupToggle = () => setIsPopupToggled(!isPopupToggled);

  return (
    <DashboardTopNavWrapper>
      <p className="dashboard-top-nav--logo">TodoIV</p>
      <button onClick={handlePopupToggle}>
        <PopupIcon fill="var(--color-primary)" />
      </button>
      {/* <DashboardTopNavPopup isPopupToggled={isPopupToggled} /> */}
    </DashboardTopNavWrapper>
  );
};

const DashboardTopNavPopupWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  gap: 2rem;

  background-color: var(--color-primary);

  width: 0;
  height: 100vh;

  padding: 2rem 0;

  transition: width 0.3s;

  &.toggled {
    width: 13rem;
  }

  .popup--links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .popup--links a {
    display: grid;
    place-items: center;

    color: var(--color-white);

    height: 2.5rem;
    width: 6rem;

    font-size: var(--font-text-sms);
    font-weight: 500;

    border-radius: 4px;
  }

  .popup--links a.active {
    background-color: var(--color-white);
    color: var(--color-primary);
  }

  svg {
    width: var(--svg-dim-sms);
    height: var(--svg-dim-sms);
  }

  @media (min-width: 425px) {
    height: 20rem;

    &.toggled {
      width: 12rem;
    }

    .popup--links {
      gap: 1.2rem;
    }

    .popup--links a {
      font-size: var(--font-text-lgs);

      height: 3.3rem;
      width: 8.2rem;
    }
  }
`;

const DashboardTopNavPopup = ({ isPopupToggled }) => {
  return (
    <DashboardTopNavPopupWrapper className={isPopupToggled ? "toggled" : ""}>
      <ReturnIcon fill="var(--color-white)" />
      <div className="popup--links">
        <NavLink
          to="/dashboard"
          end>
          Home
        </NavLink>
        <NavLink to="/dashboard/all">All</NavLink>
        <NavLink to="/dashboard/daily">Daily</NavLink>
        <NavLink to="/dashboard/create">Create</NavLink>
      </div>
    </DashboardTopNavPopupWrapper>
  );
};

export default Dashboard;
