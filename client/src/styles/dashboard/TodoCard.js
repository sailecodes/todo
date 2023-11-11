import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  grid-column: 1 / 3;

  padding: 2rem;
  border-radius: 12px;

  .todo--information-container {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .todo--reminder {
    position: relative;

    font-size: 4.5rem;

    margin-top: 1.5rem;
  }

  .todo--title {
    font-size: 6.5rem;
  }

  .todo--description {
    display: inline-block;

    position: relative;
    bottom: 1.5rem;

    font-size: 2.5rem;
  }

  .todo--meta-container {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .todo--meta-container > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .todo--meta-container p {
    font-size: 2rem;
  }

  .todo--meta-container p::first-letter {
    text-transform: uppercase;
  }
`;

export default Wrapper;
