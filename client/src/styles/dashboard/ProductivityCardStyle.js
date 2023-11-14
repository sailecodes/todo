import styled from "styled-components";

const Wrapper = styled.div`
  .home--card-productivity {
    color: var(--color-black);

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .home--card-productivity > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 8rem;
  }

  .home--card-productivity-count {
    font-size: 6.5rem;
  }

  .home--card-productivity-count span {
    font-size: 4.3rem;
  }

  .home--card-productivity-icon {
    width: 12rem;
    height: 12rem;
  }
`;

export default Wrapper;
