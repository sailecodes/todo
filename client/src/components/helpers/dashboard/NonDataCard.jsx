import { Link } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/NonDataCardStyle";
import CardHeading from "./CardHeading";
import CreateIcon from "../icons/CreateIcon";
import SeeIcon from "../icons/SeeIcon";

const NonDataCard = ({ cardTitle }) => {
  return (
    <Wrapper>
      <div className="home--card home--card-non-data">
        <CardHeading cardTitle={cardTitle} />
        <Link
          className="home--card-non-data-link"
          to={`/dashboard/todos${
            cardTitle === "See all todos" ? "/all" : cardTitle === "Create todo" ? "/create" : ""
          }`}>
          {cardTitle === "Create todo" ? <CreateIcon /> : <SeeIcon />}
        </Link>
      </div>
    </Wrapper>
  );
};

export default NonDataCard;
