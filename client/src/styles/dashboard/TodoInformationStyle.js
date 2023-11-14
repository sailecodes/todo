import styled from "styled-components";

const Wrapper = styled.div`
  .todo--reminder {
    position: relative;

    font-size: 4.5rem;

    margin-top: 1.5rem;
  }

  .todo--information-container {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .todo--title {
    font-size: 6.5rem;
  }

  .todo--title.not-todo {
    font-size: 4.5rem;
  }

  .todo--description {
    display: inline-block;

    position: relative;
    bottom: 1.5rem;

    font-size: 2.5rem;
  }
`;

export default Wrapper;
