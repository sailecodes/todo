import styled from "styled-components";

const Wrapper = styled.div`
  .dashboard--side-nav-item-container {
    display: grid;
    place-items: center;

    height: 6rem;
    width: 21rem;

    border-radius: 10px;
  }

  .dashboard--side-nav-item-container:has(.dashboard--side-nav-link.active) {
    background-color: var(--color-white);
  }

  .dashboard--side-nav-link {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 1.8rem;
    text-decoration: none;
  }

  .dashboard--side-nav-link > p {
    color: var(--color-white);
  }

  .dashboard--side-nav-link.active > p {
    color: var(--color-primary);
  }

  .dashboard--side-nav-link.active svg {
    stroke: var(--color-primary);
  }
`;

export default Wrapper;
