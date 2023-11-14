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

  .todo--deadline-marker {
    display: grid;
    place-items: center;

    width: 14rem;
    height: 3rem;

    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;

    margin-left: 1.5rem;
    border: 1px solid var(--color-black);
    border-radius: 8px;
  }

  .todo--deadline-soon {
    background-color: var(--color-deadline-soon);
    color: var(--color-black);
  }

  .todo--deadline-passed {
    background-color: var(--color-deadline-passed);
    color: var(--color-white);

    width: 16rem;
  }
`;

export default Wrapper;
