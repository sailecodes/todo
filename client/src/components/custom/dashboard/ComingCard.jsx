import ImportanceIcon from "../icons/ImportanceIcon";
import ProgressIcon from "../icons/ProgressIcon";

import styled from "styled-components";

const ComingCard = ({ data }) => {
  return (
    <ComingCardWrapper>
      <header>
        <div className="coming-card--square-icon"></div>
        <p className="coming-card--title">Coming todos</p>
      </header>
      <div className="coming-card--todos-container">
        <div>
          <p className="coming-card--name">{"Go to the movie with friends".substring(0, 15) + "..."}</p>
          <div className="coming-card--meta">
            <div>
              <ImportanceIcon
                fill="var(--color-yellow)"
                stroke="var(--color-black)"
              />
              <p className="coming-card--meta-text">High</p>
            </div>
            <div>
              <ProgressIcon
                fill="var(--color-blue)"
                stroke="var(--color-black)"
              />
              <p className="coming-card--meta-text">Halfway there</p>
            </div>
          </div>
        </div>
      </div>
    </ComingCardWrapper>
  );
};

const ComingCardWrapper = styled.div`
  display: none;

  @media (min-width: 1055px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    height: 100%;

    grid-row: 1 / -1;
    grid-column: 3;

    background-color: var(--color-primary);
    color: var(--color-white);

    border-radius: 8px;
    padding: 1.5rem;

    > header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .coming-card--square-icon {
      background-color: var(--color-white);

      width: var(--font-subheading-lg);
      height: var(--font-subheading-lg);

      border-radius: 5px;
    }

    .coming-card--title {
      font-size: var(--font-subheading-lg);
      font-weight: 500;
    }

    .coming-card--name {
      font-size: var(--font-heading-sm);
    }

    .coming-card--meta {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .coming-card--meta > div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .coming-card--meta svg {
      width: var(--size-svg-sm);
      height: var(--size-svg-sm);
    }

    .coming-card--meta-text {
      font-size: var(--font-text-sm);
    }
  }
`;

export default ComingCard;
