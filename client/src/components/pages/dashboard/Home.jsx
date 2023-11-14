import { useQueries } from "@tanstack/react-query";

import Wrapper from "../../../styles/dashboard/HomeStyle";
import axiosFetch from "../../../utilities/axiosFetch";
import TodoCard from "../../helpers/dashboard/TodoCard";
import NonDataCard from "../../helpers/dashboard/NonDataCard";
import ProductivityCard from "../../helpers/dashboard/ProductivityCard";
import ComingCard from "../../helpers/dashboard/ComingCard";

const Home = () => {
  const resultsArr = useQueries({
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
    <Wrapper>
      <ProductivityCard
        cardTitle="Finished todos"
        todosCount={resultsArr[0].data}
        isLoading={resultsArr[0].isPending}
      />
      <ProductivityCard cardTitle="Missed todos" todosCount={resultsArr[1].data} isLoading={resultsArr[1].isPending} />
      <ComingCard cardTitle="Coming todos" comingTodos={resultsArr[2].data} isLoading={resultsArr[2].isPending} />
      <TodoCard
        cardTitle="Newest todo"
        reminder={resultsArr[3].data?.reminder}
        title={resultsArr[3].data?.title}
        description={resultsArr[3].data?.description}
        importance={resultsArr[3].data?.importance}
        progress={resultsArr[3].data?.progress}
        deadline={resultsArr[3].data?.deadline}
        isPending={resultsArr[3].isPending}
        isModifiable={false}
      />
      <NonDataCard cardTitle="Create todo" />
      <NonDataCard cardTitle="See daily todos" />
      <NonDataCard cardTitle="See all todos" />
    </Wrapper>
  );
};

export default Home;
