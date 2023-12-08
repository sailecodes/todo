import { format } from "date-fns";

import Wrapper from "../../../styles/dashboard/TodoMetaStyle";
import DeadlineIcon from "../icons/DeadlineIcon";
import ImportanceIcon from "../icons/ImportanceIcon";
import ProgressIcon from "../icons/ProgressIcon";
import { THREE_DAYS_IN_MS } from "../../../utils/constants";
import { TODO_MODEL_PROGRESS } from "../../../../../server/utils/constants";

const TodoMeta = ({ isInTodoCard, importance, progress, deadline }) => {
  const getDeadlineInformation = (deadlineToNowDiff) => {
    if (deadlineToNowDiff > 0) {
      if (deadlineToNowDiff < THREE_DAYS_IN_MS) return { isDeadlineSoon: true, isDeadlinePassed: false };
      return { isDeadlineSoon: false, isDeadlinePassed: false };
    } else {
      return { isDeadlineSoon: false, isDeadlinePassed: true };
    }
  };

  let { isDeadlineSoon, isDeadlinePassed } = getDeadlineInformation(new Date(deadline) - Date.now());
  isDeadlinePassed = isDeadlinePassed && progress !== TODO_MODEL_PROGRESS.FINISHED;

  return (
    <Wrapper>
      <div className="todo--meta-container">
        <div>
          <ImportanceIcon
            fill="yellow"
            isInTodoCard={isInTodoCard}
          />
          <p className={!isInTodoCard ? "non-todo" : ""}>{importance} priority</p>
        </div>
        <div>
          <ProgressIcon
            fill="azure"
            isInTodoCard={isInTodoCard}
          />
          <p className={!isInTodoCard ? "non-todo" : ""}>{progress}</p>
        </div>
        {deadline && (
          <div>
            <DeadlineIcon
              fill="tomato"
              isInTodoCard={isInTodoCard}
            />
            <p className={!isInTodoCard ? "non-todo" : ""}>{format(new Date(deadline), "MMM d, yyyy @ h:mmaaa")}</p>
            {isInTodoCard && isDeadlineSoon && (
              <div className="todo--deadline-marker todo--deadline-soon">Deadline soon</div>
            )}
            {isInTodoCard && isDeadlinePassed && (
              <div className="todo--deadline-marker todo--deadline-passed">Deadline passed</div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default TodoMeta;
