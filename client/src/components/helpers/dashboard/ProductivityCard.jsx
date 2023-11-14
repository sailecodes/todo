import Wrapper from "../../../styles/dashboard/ProductivityCardStyle";
import CardHeading from "./CardHeading";
import Loading from "./Loading";

const ProductivityCard = ({ cardTitle, todosCount, isLoading }) => {
  return (
    <Wrapper>
      <div className="home--card home--card-productivity">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <CardHeading cardTitle={cardTitle} />
            <div>
              <p className="home--card-productivity-count">
                {todosCount} <span>items</span>
              </p>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductivityCard;
