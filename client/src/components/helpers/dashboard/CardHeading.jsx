import { Link } from "react-router-dom";
import Wrapper from "../../../styles/dashboard/CardHeading";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const CardHeading = ({ cardTitle, isModifiable }) => {
  return (
    <Wrapper>
      <div className="card-heading--container">
        <div className="card-marker" />
        <p className="card-title">{cardTitle}</p>
        {isModifiable && (
          <div className="card-heading--links-container">
            <Link to="/dashboard/todos/edit">
              <EditIcon />
            </Link>
            <Link to="/dashboard/todos/edit">
              <DeleteIcon />
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CardHeading;
