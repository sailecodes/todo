import styled from "styled-components";

const Wrapper = styled.div`
  .card-heading--container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .card-marker {
    background-color: var(--color-primary);

    height: 3.3rem;
    width: 3.3rem;

    border-radius: 6px;

    transition: background-color 0.25s;
  }

  .card-title {
    color: var(--color-black);

    font-size: 3rem;
    font-weight: 600;

    transition: color 0.25s;
  }

  .card-heading--links-container {
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-left: auto;
  }
`;

export default Wrapper;
