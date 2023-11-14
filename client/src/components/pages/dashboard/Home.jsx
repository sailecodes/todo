import { useQueries } from "@tanstack/react-query";

import axiosFetch from "../../../utilities/axiosFetch";
import CardHeading from "../../helpers/dashboard/CardHeading";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../helpers/dashboard/TodoCard";
import TodoInformation from "../../helpers/dashboard/TodoInformation";
import NonDataCard from "../../helpers/dashboard/NonDataCard";

import styled from "styled-components";
import ProductivityCard from "../../helpers/dashboard/ProductivityCard";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 19rem 33rem 10rem 1fr;
  gap: 3.5rem;

  padding: 2rem 0 0 2rem;

  .home--card {
    background-color: var(--color-white);

    padding: 2rem;
    border-radius: 12px;
  }

  // Home card COMING

  .home--card-coming {
    color: var(--color-black);

    grid-row: 1 / 3;
    grid-column: 3;

    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }
`;

const ComingCard = ({ cardTitle, comingTodos, isLoading }) => {
  console.log(comingTodos);

  return (
    <div className="home--card home--card-coming">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <CardHeading cardTitle={cardTitle} />
          <div className="home--card-coming-data-container">
            {comingTodos.map((todo) => {
              return (
                <TodoInformation
                  key={todo?.reminder ? todo.reminder : todo._id}
                  isInTodoCard={false}
                  reminder={todo?.reminder}
                  title={todo.title}
                  description={todo.description}
                  importance={todo.importance}
                  progress={todo.progress}
                  deadline={todo?.deadline}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

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
          console.log(data);
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
      <ProductivityCard cardTitle="Missed todos" todosCount={resultsArr[1].data} isLoading={resultsArr[1].isLoading} />
      <ComingCard
        cardTitle="Coming todos"
        comingTodos={[resultsArr[3].data]}
        isLoading={resultsArr[2].isPending || resultsArr[3].isPending}
      />
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
