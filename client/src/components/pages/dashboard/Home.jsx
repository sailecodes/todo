import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2rem;

  padding: 2rem 0 0 2rem;

  .home--item {
    border-radius: 12px;
  }

  .home--item-productivity {
    background-color: lightcoral;
  }

  .home--item-productivity:nth-child(2) {
    background-color: lightpink;
  }

  .home--item-coming {
    background-color: lightcyan;

    grid-row: 1 / 3;
    grid-column: 3;
  }

  .home--item-due-most {
    background-color: lightseagreen;

    grid-column: 1 / 3;
  }

  .home--item-quote {
    background-color: lightgoldenrodyellow;

    grid-row-start: 3;
    grid-column: 1 / -1;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div className="home--item home--item-productivity">Productivity</div>
      <div className="home--item home--item-productivity">Productivity</div>
      <div className="home--item home--item-coming">Coming</div>
      <div className="home--item home--item-due-most">Due most</div>
      <div className="home--item home--item-quote">Quote</div>
    </Wrapper>
  );
};
export default Home;
