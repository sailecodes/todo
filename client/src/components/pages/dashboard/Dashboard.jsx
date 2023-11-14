import { useNavigate, Outlet } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../../../styles/dashboard/DashboardStyle";
import DashboardSideNavLink from "../../helpers/dashboard/DashboardSideNavLink";
import axiosFetch from "../../../utilities/axiosFetch";

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
