import Wrapper from "../../../styles/CardHeading";

const CardHeading = ({ cardTitle }) => {
  return (
    <Wrapper>
      <div className="card-heading-container">
        <div className="card-marker" />
        <p className="card-title">{cardTitle}</p>
      </div>
    </Wrapper>
  );
};

export default CardHeading;
