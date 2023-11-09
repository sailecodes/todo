import { useQueries } from "@tanstack/react-query";
import styled from "styled-components";
import axiosFetch from "../../../utilities/axiosFetch";

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
  const resultsArr = useQueries({
    queries: [
      {
        queryKey: ["todos", "finished"],
        queryFn: async () => {
          const {
            // FIXME: Might not need data (fix server-side also if data not needed)
            data: { msg, data, count },
          } = await axiosFetch.get("/todos/finished");
          return count;
        },
      },
      {
        queryKey: ["todos", "past-deadline"],
        queryFn: async () => {
          const {
            data: { msg, data, count },
          } = await axiosFetch.get("/todos/past-deadline");
          return count;
        },
      },
      {
        // TODO: Implement coming todos on server-side
        queryKey: ["todos", "coming"],
        queryFn: async () => {
          return ["to be implemented"];
        },
      },
      {
        queryKey: ["todos", "newest"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/newest");
          return data;
        },
      },
    ],
  });

  console.log(resultsArr[0].data);
  console.log(resultsArr[1].data);
  console.log(resultsArr[2].data);
  console.log(resultsArr[3].data);

  return (
    <Wrapper>
      <div className="home--item home--item-productivity">
        {resultsArr[0].isLoading ? "Loading..." : `Finished todos: ${resultsArr[0].data}`}
      </div>
      <div className="home--item home--item-productivity">
        {resultsArr[1].isLoading ? "Loading..." : `Missed todos: ${resultsArr[1].data}`}
      </div>
      <div className="home--item home--item-coming">
        {resultsArr[2].isLoading ? "Loading..." : `Coming todos: ${resultsArr[2].data}`}
      </div>
      <div className="home--item home--item-due-most">
        {resultsArr[3].isLoading ? "Loading..." : `Newest todo: ${resultsArr[3].data.title}`}
      </div>
      <div className="home--item home--item-quote">Quote</div>
    </Wrapper>
  );
};
export default Home;
