import { format } from "date-fns";

import Wrapper from "../../../styles/dashboard/TodoMetaStyle";
import DeadlineIcon from "../icons/DeadlineIcon";
import ImportanceIcon from "../icons/ImportanceIcon";
import ProgressIcon from "../icons/ProgressIcon";

const TodoMeta = ({ isInTodoCard, importance, progress, deadline }) => {
  return (
    <Wrapper>
      <div className="todo--meta-container">
        <div>
          <ImportanceIcon fill="yellow" isInTodoCard={isInTodoCard} />
          <p className={!isInTodoCard ? "non-todo" : ""}>{importance} priority</p>
        </div>
        <div>
          <ProgressIcon fill="azure" isInTodoCard={isInTodoCard} />
          <p className={!isInTodoCard ? "non-todo" : ""}>{progress}</p>
        </div>
        {deadline && (
          <div>
            <DeadlineIcon fill="tomato" isInTodoCard={isInTodoCard} />
            <p className={!isInTodoCard ? "non-todo" : ""}>{format(new Date(deadline), "MMM d, yyyy @ h:mmaaa")}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default TodoMeta;
