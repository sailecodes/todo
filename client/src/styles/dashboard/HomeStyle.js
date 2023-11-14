import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 19rem 33rem 10rem 1fr;
  gap: 3.5rem;

  padding: 2rem 0 0 2rem;

  .home--card {
    background-color: var(--color-white);

    padding: 2rem;
    border-radius: 12px;
  }

  // Home card COMING

  .home--card-coming {
    color: var(--color-black);

    grid-row: 1 / 3;
    grid-column: 3;

    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }

  .home--card-coming-data-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export default Wrapper;
