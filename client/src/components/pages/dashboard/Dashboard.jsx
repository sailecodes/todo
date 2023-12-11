import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import axiosFetch from "../../../utils/axiosFetch";
import PopupIcon from "../../custom/icons/PopupIcon";
import ReturnIcon from "../../custom/icons/ReturnIcon";

import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: 6.5rem 1fr;

  background-color: var(--color-bg);

  height: 100vh;

  .dashboard--tagline {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 14rem 1fr;

    .dashboard--tagline {
      grid-column: 2;
      grid-row: 1;

      display: flex;
      align-items: center;

      color: var(--color-primary);

      font-size: 2.3rem;
      font-weight: 500;

      padding: 0 2rem;
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <p className="dashboard--tagline">Procrastinating, what&apos;s that?</p>
      <DashboardSideNav />
      <DashboardTopNav />
      <Outlet />
    </DashboardWrapper>
  );

  // return (
  //   <Wrapper>
  //     <nav className="dashboard--side-nav">
  //       <p className="dashboard--side-nav-logo">IV</p>
  //       <div>
  //         <DashboardSideNavLink
  //           path=""
  //           end={true}
  //           linkName="Home"
  //         />
  //         <DashboardSideNavLink
  //           path="/todos"
  //           end={false}
  //           linkName="Todos"
  //         />
  //       </div>
  //     </nav>
  //     <nav className="dashboard--top-nav">
  //       <p>Procrastinating...what&apos;s that?</p>
  //       <div>
  //         <button
  //           className="dashboard--logout-btn"
  //           onClick={mutate}>
  //           Logout
  //         </button>
  //       </div>
  //     </nav>
  //     <Outlet />
  //   </Wrapper>
  // );
};

const DashboardSideNavWrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    grid-row: 1 / -1;
    grid-column: 1;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 100vh;

    padding: 1rem;

    .dashboard-side-nav--logo {
      font-size: var(--font-heading-main-lgs);
      font-weight: 500;
      letter-spacing: -1px;
    }

    .dashboard-side-nav--links {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      height: 100%;
    }

    .dashboard-side-nav--links a {
      display: grid;
      place-items: center;

      color: var(--color-white);

      height: 3.2rem;
      width: 9.5rem;

      font-size: var(--font-text-lgs);
      font-weight: 500;

      border-radius: 4px;
    }

    .dashboard-side-nav--links a.active {
      background-color: var(--color-white);
      color: var(--color-primary);
    }

    .dashboard-side-nav--logout-btn {
      color: var(--color-white);

      height: 3rem;
      width: 10rem;

      font-size: var(--font-text-lgs);

      margin-top: auto;
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
      <p className="dashboard-side-nav--logo">TodoIV</p>
      <div className="dashboard-side-nav--links">
        <NavLink
          to="/dashboard"
          end>
          Home
        </NavLink>
        <NavLink to="/dashboard/all">All</NavLink>
        <NavLink to="/dashboard/daily">Daily</NavLink>
        <NavLink to="/dashboard/create">Create</NavLink>
        <button
          className="dashboard-side-nav--logout-btn"
          onClick={() => logout.mutate()}>
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

  background-color: var(--color-primary);
  color: var(--color-white);

  padding: 0 2rem;

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

  @media (min-width: 768px) {
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
        <PopupIcon fill="var(--color-white)" />
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
