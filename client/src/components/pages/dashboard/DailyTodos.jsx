import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import axiosFetch from "../../../utilities/axiosFetch";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../helpers/dashboard/TodoCard";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33rem;
  gap: 3.5rem;
`;

const DailyTodos = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos", "daily"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get("/todos/daily");
      return data ? data : [{ reminder: "*Robot noises* No todos found beep boop. Make one!" }];
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>error...</div>;

  console.log(data);

  return (
    <Wrapper>
      {data.map((todo) => {
        return (
          <TodoCard
            key={todo._id}
            cardTitle="Todo"
            reminder={todo.reminder}
            title={todo.title}
            description={todo.description}
            importance={todo.importance}
            progress={todo.progress}
            deadline={todo.deadline}
            isPending={false}
          />
        );
      })}
    </Wrapper>
  );
};

export default DailyTodos;
