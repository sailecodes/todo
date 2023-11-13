import { format } from "date-fns";

import DeadlineIcon from "../icons/DeadlineIcon";
import ImportanceIcon from "../icons/ImportanceIcon";
import ProgressIcon from "../icons/ProgressIcon";

const TodoMeta = ({ isInTodoCard, importance, progress, deadline }) => {
  return (
    <div className="todo--meta-container">
      <div>
        <ImportanceIcon fill="yellow" isInTodoCard={isInTodoCard} />
        <p>{importance} priority</p>
      </div>
      <div>
        <ProgressIcon fill="azure" isInTodoCard={isInTodoCard} />
        <p>{progress}</p>
      </div>
      {deadline && (
        <div>
          <DeadlineIcon fill="tomato" isInTodoCard={isInTodoCard} />
          <p>{format(new Date(deadline), "MMM d, yyyy @ h:mmaaa")}</p>
        </div>
      )}
    </div>
  );
};

export default TodoMeta;
