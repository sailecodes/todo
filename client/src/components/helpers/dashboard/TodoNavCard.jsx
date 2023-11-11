import { NavLink } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/TodoNavCardStyle";
import CardHeading from "./CardHeading";

const TodoNavCard = ({ path, end, cardTitle }) => {
  return (
    <Wrapper>
      <NavLink to={`/dashboard/todos${path}`} end={end}>
        <div className="todo--nav-card">
          <CardHeading cardTitle={cardTitle} isModifiable={false} />
        </div>
      </NavLink>
    </Wrapper>
  );
};

export default TodoNavCard;
