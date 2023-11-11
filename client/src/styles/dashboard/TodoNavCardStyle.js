import styled from "styled-components";

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }

  .todo--nav-card {
    background-color: var(--color-white);

    display: flex;
    align-items: center;

    padding: 2rem;
    border-radius: 12px;

    transition: background-color 0.25s;
  }

  .active .todo--nav-card {
    background-color: var(--color-primary);
  }

  .active .card-marker {
    background-color: var(--color-white);
  }

  .active .card-title {
    color: var(--color-white);
  }
`;

export default Wrapper;
