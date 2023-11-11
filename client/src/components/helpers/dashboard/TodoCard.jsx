import Wrapper from "../../../styles/dashboard/TodoCard";
import CardHeading from "./CardHeading";
import Loading from "./Loading";
import TodoInformation from "./TodoInformation";

const TodoCard = ({ cardTitle, reminder, title, description, importance, progress, deadline, isPending }) => {
  return (
    <Wrapper>
      {isPending && <Loading />}
      {!isPending && (
        <>
          <CardHeading cardTitle={cardTitle} />
          <TodoInformation
            reminder={reminder}
            title={title}
            description={description}
            importance={importance}
            progress={progress}
            deadline={deadline}
          />
        </>
      )}
    </Wrapper>
  );
};

export default TodoCard;
