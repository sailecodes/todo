import Reminder from "./Reminder";
import TodoMeta from "./TodoMeta";

const TodoInformation = ({ reminder, title, description, importance, progress, deadline }) => {
  return (
    (reminder && <Reminder reminder={reminder} />) ||
    (!reminder && (
      <div className="todo--information-container">
        <p className="todo--title">{title}</p>
        <p className="todo--description">{description ? description : "An important todo item...do it."}</p>
        <TodoMeta isInTodoCard={true} importance={importance} progress={progress} deadline={deadline} />
      </div>
    ))
  );
};

export default TodoInformation;
