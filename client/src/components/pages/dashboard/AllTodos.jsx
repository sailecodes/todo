import { useQuery } from "@tanstack/react-query";

import axiosFetch from "../../../utils/axiosFetch";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../helpers/dashboard/TodoCard";

import styled from "styled-components";
const AllTodosWrapper = styled.main`
  max-width: 89rem;

  padding: 2rem;
`;

const AllTodos = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos", "all"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get("/todos");
      return data ? data : [{ reminder: "*Robot noises* No todos found beep boop. Make one!" }];
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>error...</div>;

  return <AllTodosWrapper>Hello</AllTodosWrapper>;

  // return (
  //   <Wrapper>
  //     {data.map((todo) => {
  //       return (
  //         <TodoCard
  //           key={todo._id}
  //           cardTitle="Todo"
  //           reminder={todo.reminder}
  //           todoId={todo._id}
  //           title={todo.title}
  //           description={todo.description}
  //           importance={todo.importance}
  //           progress={todo.progress}
  //           deadline={todo.deadline}
  //           isPending={false}
  //           isModifiable={true}
  //         />
  //       );
  //     })}
  //   </Wrapper>
  // );
};
export default AllTodos;
