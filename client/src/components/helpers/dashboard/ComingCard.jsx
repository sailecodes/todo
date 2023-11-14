import CardHeading from "./CardHeading";
import Loading from "./Loading";
import TodoInformation from "./TodoInformation";

const ComingCard = ({ cardTitle, comingTodos, isLoading }) => {
  return (
    <div className="home--card home--card-coming">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <CardHeading cardTitle={cardTitle} />
          <div className="home--card-coming-data-container">
            {comingTodos.map((todo) => {
              return (
                <TodoInformation
                  key={todo?.reminder ? todo.reminder : todo._id}
                  isInTodoCard={false}
                  reminder={todo?.reminder}
                  title={todo.title}
                  description={todo.description}
                  importance={todo.importance}
                  progress={todo.progress}
                  deadline={todo?.deadline}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ComingCard;
