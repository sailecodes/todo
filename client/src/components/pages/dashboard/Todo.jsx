import { Outlet } from "react-router-dom";

import Wrapper from "../../../styles/dashboard/TodoStyle";
import TodoNavCard from "../../helpers/dashboard/TodoNavCard";

const Todo = () => {
  return (
    <Wrapper>
      <nav>
        <TodoNavCard cardTitle="Daily todos" path="" end={true} />
        <TodoNavCard cardTitle="All todos" path="/all" end={false} />
        <TodoNavCard cardTitle="Create todo" path="/create" end={false} />
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Todo;
