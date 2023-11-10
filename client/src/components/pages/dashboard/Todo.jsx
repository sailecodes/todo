import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 10rem;
`;

const TodoNavCard = ({ cardTitle }) => {
  return <div className="todo--nav-card"></div>;
};

const Todo = () => {
  return <Wrapper>Todo</Wrapper>;
};

export default Todo;
