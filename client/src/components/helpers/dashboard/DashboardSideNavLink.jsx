import { NavLink } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/DashboardSideNavLinkStyle";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import TodoIcon from "../icons/TodoIcon";

const DashboardSideNavLink = ({ path, end, linkName }) => {
  return (
    <Wrapper>
      <div className="dashboard--side-nav-item-container">
        <NavLink to={`/dashboard${path}`} end={end} className="dashboard--side-nav-link">
          {path === "/todos" ? (
            <TodoIcon stroke="white" />
          ) : path === "/profile" ? (
            <ProfileIcon stroke="white" />
          ) : (
            <HomeIcon stroke="white" />
          )}
          <p>{linkName}</p>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default DashboardSideNavLink;
