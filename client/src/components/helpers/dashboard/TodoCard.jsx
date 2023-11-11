import Wrapper from "../../../styles/dashboard/TodoCardStyle";
import CardHeading from "./CardHeading";
import Loading from "./Loading";
import TodoInformation from "./TodoInformation";

const TodoCard = ({
  cardTitle,
  reminder,
  title,
  description,
  importance,
  progress,
  deadline,
  isPending,
  isModifiable,
}) => {
  return (
    <Wrapper>
      {isPending && <Loading />}
      {!isPending && (
        <>
          <CardHeading cardTitle={cardTitle} isModifiable={isModifiable} />
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
