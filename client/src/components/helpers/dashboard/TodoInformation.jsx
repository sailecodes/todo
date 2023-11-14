import Wrapper from "../../../styles/dashboard/TodoInformationStyle";
import Reminder from "./Reminder";
import TodoMeta from "./TodoMeta";

const TodoInformation = ({ isInTodoCard, reminder, title, description, importance, progress, deadline }) => {
  return (
    <Wrapper>
      {reminder && <Reminder reminder={reminder} />}
      {!reminder && (
        <div className="todo--information-container">
          <p className={`todo--title ${!isInTodoCard ? "not-todo" : ""}`}>{title}</p>
          {isInTodoCard && (
            <p className="todo--description">{description ? description : "An important todo item...do it."}</p>
          )}
          <TodoMeta isInTodoCard={isInTodoCard} importance={importance} progress={progress} deadline={deadline} />
        </div>
      )}
    </Wrapper>
  );
};

export default TodoInformation;
