import { useQueries } from "@tanstack/react-query";

import axiosFetch from "../../../utils/axiosFetch";
import ProductivityCard from "../../custom/dashboard/ProductivityCard";
import TodoCard from "../../custom/dashboard/TodoCard";
import ComingCard from "../../custom/dashboard/ComingCard";

import styled from "styled-components";

const Home = () => {
  const todosResults = useQueries({
    queries: [
      {
        queryKey: ["todos", "finished"],
        queryFn: async () => {
          const {
            data: { count },
          } = await axiosFetch.get("/todos/finished");
          return count;
        },
      },
      {
        queryKey: ["todos", "past-deadline"],
        queryFn: async () => {
          const {
            data: { count },
          } = await axiosFetch.get("/todos/past-deadline");
          return count;
        },
      },
      {
        queryKey: ["todos", "coming"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/coming");
          return data ? data : { reminder: "None coming yet!" };
        },
      },
      {
        queryKey: ["todos", "newest"],
        queryFn: async () => {
          const {
            data: { data },
          } = await axiosFetch.get("/todos/newest");
          return data ? data : { reminder: "Either everything is finished or you haven't made one yet!" };
        },
      },
    ],
  });

  return (
    <HomeWrapper>
      <ProductivityCard
        title="Finished todos"
        stat={3}
        total={12}
        statIcon={"✅"}
      />
      <ProductivityCard
        title="Missed todos"
        stat={9}
        total={12}
        statIcon={"❌"}
      />
      <TodoCard title="Newest todo" />
      <ComingCard />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main`
  padding: 2rem;

  overflow: hidden auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 27rem);
    grid-template-rows: repeat(2, 20rem);
    justify-content: center;
  }

  @media (min-width: 800px) {
    grid-column: 2;
    grid-row: 2 / -1;
  }

  @media (min-width: 1055px) {
    grid-template-columns: repeat(3, 27rem);
  }
`;
