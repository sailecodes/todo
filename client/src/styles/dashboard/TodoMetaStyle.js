import styled from "styled-components";

const Wrapper = styled.div`
  .todo--meta-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .todo--meta-container > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .todo--meta-container p {
    font-size: 2rem;
  }

  .todo--meta-container p.non-todo {
    font-size: 1.2rem;
  }

  .todo--meta-container p::first-letter {
    text-transform: uppercase;
  }
`;

export default Wrapper;
